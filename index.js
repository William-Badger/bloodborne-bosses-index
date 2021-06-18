document.addEventListener('DOMContentLoaded', () => {
    getBoss()
})

function getBoss() {
    fetch('http://localhost:3000/bloodborne')
    .then(res => res.json())
    .then(boss => boss.forEach(renderBossInfo))
}

function renderBossInfo(boss) {
    let bossBtn = document.createElement('button')
    bossBtn.textContent = boss.name

    bossBtn.addEventListener('click',() =>{
        renderOneBoss(boss)
    })

    const tab = document.querySelector('#tab')
    tab.append(bossBtn)


}

function renderOneBoss(boss){

    let bossName = document.createElement('h2')
    bossName.textContent = boss.name

    let bossLoc = document.createElement('p')
    bossLoc.textContent = "Location: " + boss.location

    let bossDam = document.createElement('p')
    bossDam.textContent = "Damage Type: " + boss.damageType

    let bossRes = document.createElement('p')
    bossRes.textContent = "Resistant: " + boss.resistant

    let bossWeak = document.createElement('p')
    bossWeak.textContent = "Weakness: " + boss.weakness

    let bossAffil = document.createElement('p')
    bossAffil.textContent = boss.affiliation

    let bossDesc = document.createElement('p')
    bossDesc.textContent = boss.description

    let bossHealth = document.createElement('p')
    bossHealth.textContent = "Health: " + boss.health

    let bossEcho = document.createElement('p')
    bossEcho.textContent = "Echoes: " + boss.echoes

    let bossImage = document.createElement('img')
    bossImage.src = boss.image

    const bossInfo = document.querySelector('#boss-info')
    bossInfo.textContent = ''
    bossInfo.append(bossName, bossImage, bossLoc, bossDam, bossRes, bossWeak, bossAffil, bossHealth, bossEcho, bossDesc)
}