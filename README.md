<p align="center">
    <img width="100px" src="https://github.com/ImanBanerjee/Animify/blob/main/assets/img/icon/icon-nobg.png"/>
    <h1 align="center">Animify</h1>
</p>

<p align="center"><b>Animify: Free Anime, No Ads.</b></p>

**Welcome to the Animify repository! Animify is a free, ad-free anime streaming app that allows users to explore a vast library of their favorite anime series and movies. Below, you'll find important information about the app, including how to download it, its features, and legal information.**


# Community

Join our discord community for more updates and bug reports

[Discord - Server](https://dsc.gg/animify)

# Download

You can download the MSI installer for Animify from the following link:

[Download Animify](https://github.com/ImanBanerjee/Animify/releases/download/0.2.0/Animify.msi)

**OR**

Start cloning Animify:

```bash
git clone https://github.com/ImanBanerjee/Animify.git
```
Next, go to this [link](https://anilist.co/settings/developer) and create a new AniList API Client. As Redirect Uri, you can insert animify://index and it should work. Now go inside the src/modules folder and create a clientData.js file with a structure like this:

```bash
module.exports = {
    clientId: ,
    redirectUri: "",
    clientSecret: ""
}
```

Fill it with the data retrieved from the creation of your AniList API Client.

```bash 
# Example:
module.exports = {
    clientId: 12345,
    redirectUri: "animify://index",
    clientSecret: "pH6nfh1JapxGHKLKNczV3K0UnkA4cqbSSEd"
}
```
# About
Animify is a user-friendly anime streaming app that offers the following features:

- Explore a vast library of your favorite anime series and movies.
- Enjoy high-quality streaming with minimal buffering.
- Navigate effortlessly with our user-friendly interface.
- Stay up-to-date with regular updates featuring the latest releases.
- 0 Ad/Pop-ups/Redirects

# Legal Information
- Disclaimer: Animify is a tool that helps users find anime by scraping links from various websites.

- Animify or its developers do not host the content found on Animify. All images and anime information found in the app are retrieved from the AniList public API.

- Additionally, all anime links found on Animify are from various third-party anime hosting websites.

- Animify or its owner are not responsible for the misuse of any content inside or outside the app and shall not be responsible for the dissemination of any content within the app.

- By using this app, you agree that the app developer is not responsible for the content within the app. Nevertheless, they may or may not come from legitimate sources.

- For internet violations, please contact the source website. The developer is not legally responsible.

# License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/ImanBanerjee/Animify/blob/main/LICENSE) for details.

Feel free to contribute, report issues, or suggest improvements. Happy anime streaming with Animify!

