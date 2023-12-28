'use strict'

const jsdom = require("jsdom")
const Requests = require ('../requests.js')
const { parse } = require("url")

/**
 * Old scraping library
 * 
 * @deprecated
 */
module.exports = class AnimeSaturnScrapeAPI extends Requests {
    constructor() {
        super()
        this.method = 'GET'
        this.hostUrl = 'https://www.animesaturn.tv/'
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    async getHomePage() {
        const respData = await this.makeRequest(this.method, this.hostUrl, this.headers, {})
        const parsedDocument = new jsdom.JSDOM(respData)

        return parsedDocument
    }

    async getEntryLink(animeEntry) {
        var animeInfoPageUrl = await this.getAnimeInfoPageUrl(animeEntry)
        if (animeInfoPageUrl == -1) {
            return -1
        }

        var progress
        animeEntry.progress == null ? progress = 0 : progress = animeEntry.progress

        console.log(animeEntry.media.title.romaji)
        console.log('url:' + animeInfoPageUrl)
        console.log('---+-----------------------+---')
        
        const playerPageUrl = await this.getAnimeEpisodePlayerPage(animeInfoPageUrl)
        const streamUrl = await this.getStreamUrl(playerPageUrl)
        console.log('stream: ' + streamUrl.replace('streamtape', 'antiadtape'))

        const iFrameUrl = await this.getIFrameUrl(streamUrl.replace('streamtape', 'antiadtape'))
        console.log('IFRAME: ' + JSON.stringify(iFrameUrl))

        /* document.getElementById('episode-url').src = iFrameUrl */

    }
    
    async getAnimeInfoPageUrl(animeEntry) {
        const animeId = animeEntry.mediaId
        const progress = animeEntry.progress
        // array composed by anime original name and its anilist synonyms
        const animeNames = [animeEntry.media.title.romaji.toLowerCase().replace(/\s/g, '')]
                           .concat(Object.values(animeEntry.media.synonyms))

        console.log(animeNames)
        
        // retrieving page and checking if the anime is correct

        // method 1: get alphabetical index in animesaturn archive
        for(let key=0; key<Object.keys(animeNames).length; key++) {
            let firstCharOfAnimeName = Array.from(animeNames[key])[0]
            let animeList = await this.getAnimeListFromAlphArchive(firstCharOfAnimeName)

            let animeIndex = await this.getAnimePosition(animeNames[key], animeList, animeId)
            if(animeIndex == -1) {
                console.log('anime index not found')
                
            } else if(await this.isAnimeCorrect(animeList[animeIndex], animeId)) {
                console.log("Anime page url successfully scraped with method 1")
                const animeInfoPageUrl = await this.getAnimeEpisodeInfoPage(progress, animeList[animeIndex].href)
                return animeInfoPageUrl
            }
            
            // method 2: see if animeName is inside the title
        }
        console.log("Anime page url NOT scraped :(")

        return -1
    }

    // build the "Archivio Anime" letter page url and fetch that page
    async getAnimeListFromAlphArchive(firstCharOfAnimeName) {
        const url = this.hostUrl + 'animelist?letter=' + firstCharOfAnimeName.toUpperCase()
        const respData = await this.makeRequest(this.method, url, this.headers, {})
        const parsedDocument = new jsdom.JSDOM(respData)

        return parsedDocument.window.document.getElementsByClassName("badge badge-archivio badge-light")
    }

    // get the alphabetical position of animeName inside the animeList, and checks for id each time it's found
    async getAnimePosition(animeName, animeList, animeId) {
        var animeIndex = 0

        for(let key=0; key<Object.keys(animeList).length; key++) {
            var listKey = animeList[key].textContent.toLowerCase().replace(/\s/g, '')

            console.log(animeName + " " + listKey + " " + animeIndex + " " + animeName.localeCompare(listKey))

            // check alphabetical order && id matching
            if(animeName.localeCompare(listKey) <= 0 &&
               await this.isAnimeCorrect(animeList[key], animeId)) {
                return animeIndex
            } else {
                animeIndex++
            }
        }

        return -1
    }

    async isAnimeCorrect(animeUrl, animeId) {
        const respData = await this.makeRequest(this.method, animeUrl, this.headers, {})
        const parsedDocument = new jsdom.JSDOM(respData)

        // scrape anilistId in the page (not always possible)
        const anilistIdDiv = parsedDocument.window.document.querySelectorAll(`a[href^="https://anilist.co/anime/"]`)[0]
        if(anilistIdDiv) {
            var anilistId = anilistIdDiv.href.slice(25, -1)
        } else {
            return false
        }

        console.log(anilistId + " " + animeId)

        if(anilistId == animeId) {
            return true
        } 
        
        return false
    }

    // get the link to the info page of an anime episode
    async getAnimeEpisodeInfoPage(progress, animeUrl) {
        const respData = await this.makeRequest(this.method, animeUrl, this.headers, {})
        const parsedDocument = new jsdom.JSDOM(respData)

        return parsedDocument.window.document.querySelectorAll(`a[href$="${progress}"]`)[0].href
    }

    // get the link to the player page of an anime episode (2nd server since the video link is easily fetchable)
    async getAnimeEpisodePlayerPage(animeInfoPageUrl) {
        const respData = await this.makeRequest(this.method, animeInfoPageUrl, this.headers, {})
        const parsedDocument = new jsdom.JSDOM(respData)

        return parsedDocument.window.document.querySelectorAll('a[href^="https://www.animesaturn.tv/watch?file="]')[0].href +'&server=1' // get 2nd server since the video link is easily fetchable 
    }

    // get the stream site episode url
    async getStreamUrl(playerPageUrl) {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:80'
        }

        const respData = await this.makeRequest(this.method, playerPageUrl, headers, {})
        const parsedDocument = new jsdom.JSDOM(respData)

        return parsedDocument.window.document.getElementsByTagName('iframe')[0].src
    }

    // get the iframe url
    async getIFrameUrl(streamUrl) {
        const respData = await this.makeRequest(this.method, streamUrl, this.headers, {})
        const parsedDocument = new jsdom.JSDOM(respData)

        return parsedDocument.window.document.getElementById('robotlink').textContent
    }
}
