
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/M-Zweibrucker/portifolio-js/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
