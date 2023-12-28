<p align="center">
    <img width="100px" src="https://media.discordapp.net/attachments/841882095227502632/1189541317424971776/animify.png?ex=659e89ae&is=658c14ae&hm=b48472f9fc9fb83f18994ebcd4b872f93af0c81889afc69623e9b1d38acdaa1a&=&format=webp&quality=lossless"/>
    <h1 align="center">Animify</h1>
</p>

<p align="center"><b>Animify: Free Anime, No Ads.</b></p>

<p align="center"><b>Welcome to the Animify repository! Animify is a free, ad-free anime streaming app that allows users to explore a vast library of their favorite anime series and movies. Below, you'll find important information about the app, including how to download it, its features, and legal information.</b></p>

<br>
<br>

# Community

Join our discord community for more updates and bug reports

[Discord - Server](https://dsc.gg/animify)


# Screenshots

![Screenshot](https://media.discordapp.net/attachments/841882095227502632/1189490424704938045/image.png?ex=659e5a48&is=658be548&hm=43cee8eff0928f173a974e3c13710646d4877c58f0bb3dc98018a858eccdd28b&=&format=webp&quality=lossless&width=1258&height=671)

![Screenshot](https://media.discordapp.net/attachments/841882095227502632/1189490586944802906/image.png?ex=659e5a6f&is=658be56f&hm=c544487e77f50eb9739df89018d7944cc2ab6e91e471ba2691e4c12736a4096c&=&format=webp&quality=lossless&width=1256&height=671)

![Screenshot](https://media.discordapp.net/attachments/841882095227502632/1189490571195199508/image.png?ex=659e5a6b&is=658be56b&hm=9ecd6b360dba37127586f27bb350f26212f8f2343baccd8f12e5f614f381a60c&=&format=webp&quality=lossless&width=1260&height=671)

# Download

You can download the MSI installer for Animify from the following link:

[Download Animify](https://github.com/ImanBanerjee/Animify/releases/download/2.1.1/Animify.msi)

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
