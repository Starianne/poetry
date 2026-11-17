btn = document.querySelector('#btn')
sentence = document.querySelector('#sentence')
adjectives = ["fallacious","raspy","aggressive","annoying","immense","bright","taboo","halting","previous"]
verbs = ["noted", "received", "sheltered", "hated", "reported", "marched", "soaked", "performed", "connected"]
nouns = ["bait","butter","chicken","skirt","knowledge","rice","border","jewel","pies"]
adverbs = ["courageously","bashfully","closely","devotedly","diligently","fully","justly","vainly","continually"]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * adjectives.length);

    sentence.innerText = "The " +  adjectives[random] + " " + nouns[random] + " " + adverbs[random] + " " + verbs[random]
})