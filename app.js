document.addEventListener("DOMContentLoaded", () => {

  const layer = document.querySelector('.spark-layer');
  const MAX = 6;

  function spawnSpark() {
    if (layer.children.length >= MAX) return;

    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.animationDuration = (12 + Math.random() * 6) + 's';

    layer.appendChild(s);
    s.addEventListener('animationend', () => s.remove());
  }

  function loop() {
    spawnSpark();
    requestAnimationFrame(loop);
  }
  loop();


  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");

  window.closeModal = function () {
    modal.style.display = "none";
  };


  
  const descriptions = {
   "Tanjiro": "Tanjiro Kamado is a kind-hearted boy whose life is shattered when demons kill his family and Nezuko is turned into one, pushing him onto the path of a Demon Slayer. He begins in the Final Selection arc after intense training under Sakonji Urokodaki, learning Water Breathing and stepping into a deadly new world. In the Asakusa arc, he encounters Muzan Kibutsuji for the first time, realizing the true source of all demons. During the Tsuzumi Mansion arc, he teams up with Zenitsu and Inosuke, forming the core trio that will fight together through everything. In the Natagumo Mountain arc, he faces the terrifying Spider Demon family and witnesses the overwhelming strength of the Hashira. In the Rehabilitation Training arc, he recovers and sharpens his skills under Hashira guidance. In the Mugen Train arc, he fights alongside Kyojuro Rengoku against Akaza, suffering a heartbreaking loss that shapes his resolve. In the Entertainment District arc, he battles Upper Moon Six with Tengen Uzui, pushing his limits to protect civilians. In the Swordsmith Village arc, he awakens new strength, fighting Upper Moons alongside Muichiro and Mitsuri while uncovering deeper truths about his abilities. In the Hashira Training arc, he prepares for the final war by pushing his body and spirit beyond normal limits. In the Infinity Castle arc, he enters Muzan’s stronghold where the final battle against Upper Moons begins in chaos. He also fights alongside Giyu Tomioka in a brutal clash against Akaza, finally ending the Upper Moon’s suffering. As the war against Muzan peaks, Tanjiro is pushed to his absolute limit and ultimately gets turned into the Demon King, becoming humanity’s greatest threat for a brief moment. However, he is saved and returns to humanity, proving his will is stronger than the curse. In the final outcome, Tanjiro survives everything he lost and endured, becoming a living symbol of endurance, compassion, and the end of an era of demons.",
  
  "Nezuko": "Nezuko Kamado starts as a gentle girl whose life is destroyed when demons massacre her family, and she is transformed into a demon while still protecting her brother Tanjiro instead of attacking him. In the Final Selection aftermath, she travels hidden in a box, resisting her bloodlust as Tanjiro begins his journey. In the Asakusa arc, she faces her first major temptation under Muzan’s influence but proves she can reject his control. During the Tsuzumi Mansion arc, she fights alongside Tanjiro’s team for the first time, showing her explosive Blood Demon Art. In the Natagumo Mountain arc, she unleashes her full demon strength against the Spider Family, burning her own body to protect others. In the Rehabilitation arc, she isolates herself to suppress her hunger and prove she won’t harm humans. In the Mugen Train arc, she awakens to help Tanjiro against Enmu’s control, protecting passengers even while injured. In the Entertainment District arc, she enters a violent awakened state and overpowers Daki, revealing her terrifying demon potential. In the Swordsmith Village arc, she evolves further, gaining sunlight resistance and shocking even Upper Moon-level enemies. In the Hashira Training arc, she struggles with control but grows closer to her humanity again. In the Infinity Castle arc, she supports Tanjiro’s final war from the shadows, protecting him and allies during chaos. She plays a key emotional role in the battle against Muzan, symbolizing the hope of humanity within demons. After Muzan’s defeat, she becomes a central reason Tanjiro fights back from becoming the Demon King. She ultimately survives the war and regains her full humanity after enduring a life that constantly balanced between monster and sister. In the end, Nezuko proves that even a demon can choose love over instinct, becoming the heart of Tanjiro’s entire journey.",
  
  "Zenitsu": "Zenitsu Agatsuma starts as a cowardly Demon Slayer who constantly doubts himself and clings to others, despite being insanely gifted with Thunder Breathing. In the Final Selection aftermath, he travels with Tanjiro and Inosuke, often panicking but secretly holding massive hidden power. In the Tsuzumi Mansion arc, his unconscious state reveals his true strength, where he defeats demons with lightning-fast precision using First Form: Thunderclap and Flash. During the Natagumo Mountain arc, he faces death itself and awakens deeper resolve, protecting others even while terrified. In the Rehabilitation Training arc, he trains under strict guidance, slowly building confidence and control over his abilities. In the Mugen Train arc, he fights Enmu’s influence and protects passengers while still switching between fear and bravery. In the Entertainment District arc, he goes undercover with the team and later unleashes a devastating Thunder Breathing attack against Upper Moon Six’s forces. In the Swordsmith Village arc, he continues to grow stronger, showing more control over his breathing techniques. In the Hashira Training arc, he pushes through his fear, starting to rely less on luck and more on skill. In the Infinity Castle arc, Zenitsu steps into his most serious form yet, facing Upper Moon-level threats with focused determination instead of hesitation. He ultimately plays a key role in the final war against Muzan’s forces, proving he is far more than just a “coward.” In the end, Zenitsu becomes a fully realized Thunder Breathing swordsman, turning fear into raw lightning speed and unwavering resolve.",
  
  "Inosuke": "Inosuke Hashibira begins as a wild, beast-masked warrior raised in the mountains, relying purely on instinct and self-taught Beast Breathing. In the Final Selection aftermath, he immediately challenges others, especially Tanjiro, trying to prove his strength. In the Tsuzumi Mansion arc, he fights alongside Zenitsu and Tanjiro, learning the basics of teamwork while still acting chaotic and aggressive. In the Natagumo Mountain arc, he faces terrifying spider demons and begins understanding real coordination in battle. During the Rehabilitation Training arc, he undergoes structured training, slowly refining his wild instincts into controlled techniques. In the Mugen Train arc, he plays a major role in fighting Enmu’s control over the train, showing sharper tactical awareness. In the Entertainment District arc, he infiltrates the mission and helps fight Upper Moon Six alongside the team, adapting to complex battle strategies. In the Swordsmith Village arc, he improves his Beast Breathing further and shows more emotional awareness toward his teammates. In the Hashira Training arc, he pushes his physical limits, becoming faster, stronger, and more precise while still keeping his wild fighting style. In the Infinity Castle arc, Inosuke takes on extremely dangerous Upper Moon-level battles, proving his instinct-driven combat can match elite demons. He fights through brutal chaos in the final war against Muzan’s forces, refusing to back down even when heavily injured. In the end, Inosuke matures from a feral mountain fighter into a true Demon Slayer who understands both strength and teamwork, without losing his wild edge.",
  
  "Rengoku": "The Flame Hashira. A blazing soul who never backs down, even in death.",
  
  "Tomioka": "The Water Hashira. Calm, distant, but insanely powerful and precise.",
  
  "Sanemi": "Aggressive Wind Hashira with a brutal fighting style and deep pain beneath.",
  
  "Himejima": "The strongest Hashira. Gentle giant with overwhelming physical strength and faith.",
  
  "Iguro": "Serpent Hashira. Precise, cold, and deadly in close combat.",
  
  "Shinobu": "Insect Hashira. Doesn’t rely on brute strength but deadly poison techniques.",
  
  "Uzui": "Sound Hashira. Flashy, loud, and explosive in both personality and combat.",
  
  "Kanroji": "Love Hashira. Uses extreme flexibility and raw emotional strength.",
  
  "Tokito": "Mist Hashira. A genius swordsman with a fog-like unpredictable fighting style.",
  
  "Kokushibo": "Kokushibo is Upper Moon One, the strongest of the Twelve Kizuki and one of the most tragic figures in the entire Demon Slayer world, being a former human who abandoned his humanity in pursuit of strength. In his human life, he was Michikatsu Tsugikuni, the twin brother of Yoriichi Tsugikuni, the legendary swordsman who created Sun Breathing and stood at the peak of human strength. From childhood, Michikatsu lived in the shadow of his brother, constantly overshadowed by Yoriichi’s natural talent, purity, and effortless mastery of everything he touched. This growing inferiority and jealousy slowly corrupted Michikatsu’s mind, making him believe that human effort was meaningless compared to natural genius. Unable to accept his limitations, he abandoned his family and eventually became a Demon Slayer, hoping to surpass his brother through strength alone. Even as a Slayer, he remained obsessed with Yoriichi, constantly comparing himself and failing to reach his level. Eventually, in desperation and fear of death, he accepted Muzan’s offer and became a demon, gaining immortality at the cost of his humanity. As Kokushibo, he becomes the creator of Moon Breathing, a twisted evolution of Sun Breathing that manifests crescent-shaped slashes and terrifying regenerative abilities. Over centuries, he grows into the strongest Upper Moon, mastering sword techniques that evolve directly from his own flesh and demonic mutation. In the Infinity Castle arc, he faces multiple Hashira simultaneously, including Muichiro Tokito, Sanemi Shinazugawa, Gyomei Himejima, and Genya Shinazugawa. Despite their combined strength, Kokushibo dominates the battlefield with overwhelming experience, precision, and centuries of combat knowledge. However, during the battle, he is forced to confront the reality that even after becoming a demon, he never surpassed Yoriichi, who had long since died as a human. This realization breaks through his centuries of denial, shaking his foundation for the first time. As his body begins to collapse from the combined efforts of the Hashira, he reflects on what he has become, realizing that his obsession with strength led only to emptiness and loss. In his final moments, Kokushibo accepts that he was never truly chasing strength, but escaping his own inferiority. He dies not as the strongest demon, but as Michikatsu Tsugikuni, a man who could never escape the shadow of his brother.",
  
  "Doma": "Doma is Upper Moon Two, a demon who appears calm, cheerful, and almost divine on the surface but is completely hollow inside, lacking any real emotional depth or understanding of human suffering. In his human life, he was born into a cult-like environment where he was treated as a “chosen child” and worshipped by followers who believed he was spiritually special. From a very young age, Doma showed no genuine emotion, compassion, or empathy, instead observing human behavior like a detached spectator. This emotional emptiness carried into his transformation when Muzan turned him into a demon, amplifying his inability to feel while giving him immense power. As an Upper Moon, Doma becomes the leader of the Eternal Paradise Faith cult, using his charm and false divinity to attract followers who unknowingly become his food. His Blood Demon Art revolves around ice manipulation, creating freezing mist, lotus-like structures, and deadly frozen constructs that silently destroy his opponents from within. Unlike other demons driven by rage or ambition, Doma treats everything as entertainment, even death, viewing suffering as something interesting rather than tragic. In the Infinity Castle arc, he becomes a central opponent for Shinobu Kocho, Kanao Tsuyuri, and Inosuke Hashibira. Shinobu sacrifices herself by ingesting massive amounts of poison over time, turning her own body into a lethal trap designed specifically for Doma. When he consumes her, the poison begins destroying him from within, weakening his regeneration for the first time. Kanao and Inosuke then continue the battle, pushing him beyond his limits as his calm façade begins to crack. Even as he falls apart, Doma shows no real fear or emotional realization, still unable to understand why humans fight so desperately. In his final moments, he dissolves completely, not in rage or regret, but in confusion, never truly grasping the meaning of the emotions that surrounded him his entire existence. In the end, Doma dies as a being who observed humanity for centuries but never once became part of it.",
  
  "Akaza": "Akaza is Upper Moon Three, a demon whose entire identity is built around combat, strength, and an obsessive desire to find worthy opponents who can push him beyond his limits. Before becoming a demon, he was a human named Hakuji, a boy who lived a harsh life defined by poverty, illness, and constant struggle to survive. He was deeply attached to the people he loved, especially his father and later his fiancée, but tragedy repeatedly stripped everything away from him, shaping him into someone who believed strength was the only truth in the world. After a series of devastating losses and emotional collapse, he was eventually turned into a demon by Muzan Kibutsuji, who saw potential in his rage and despair. As Akaza, he forgets most of his human identity but retains fragments of his past emotions, which manifest as an endless hunger for battle rather than connection. He develops the Compass Needle technique, a unique ability that allows him to sense fighting spirit and predict attacks with near-perfect precision, making him extremely dangerous in close combat. In the Mugen Train arc, he clashes with Kyojuro Rengoku, the Flame Hashira, in one of the most intense battles in the series, where Akaza repeatedly pushes Rengoku to his physical and emotional limits. Despite being able to regenerate endlessly, Akaza is overwhelmed by Rengoku’s unbreakable resolve and refusal to give up, even in death. After the battle, Akaza’s buried human memories begin resurfacing, especially the memory of love, kindness, and the life he lost before becoming a demon. This emotional conflict destabilizes him, causing him to reject his own regeneration and ultimately destroy himself. In the end, Akaza does not die as a victorious Upper Moon but as Hakuji, a broken human who finally remembers what he once was.",
  
  "Hantengu": "Hantengu is Upper Moon Four, a deeply twisted demon whose entire existence revolves around fear, denial, and emotional fragmentation. On the surface, he appears as a weak, trembling old man who constantly cries and claims innocence, but this is only a mask for his true nature. His Blood Demon Art allows him to split into multiple powerful emotional clones, each representing a different extreme of his psyche like rage, joy, sorrow, pleasure, and more. In the Swordsmith Village arc, he infiltrates the battle and overwhelms the Demon Slayers by constantly multiplying and adapting through these emotion-based forms. Each clone fights independently with unique abilities, making him extremely hard to kill because defeating one version is never enough. As the battle escalates, his clones combine into more dangerous fused forms, increasing his destructive power dramatically. However, this same fragmentation becomes his weakness, as his true self remains hidden and cowardly while others fight for him. Tanjiro, Nezuko, Genya, and Mitsuri are forced into a desperate multi-front battle just to keep up with his evolving attacks. When his main body is finally exposed, his fear peaks, revealing that everything powerful about him is built on denial of responsibility. In his final moments, Hantengu tries to escape instead of facing defeat, but is ultimately destroyed, ending his cycle of fear-driven existence.",
  
  "Daki": "Daki is Upper Moon Six, a cruel and prideful demon who hides behind the identity of a beautiful courtesan in the Entertainment District while hunting and killing humans with elegance and arrogance. Before becoming a demon, she lived as a human girl who suffered abuse and discrimination alongside her brother Gyutaro. After dying, she is turned into a demon by Muzan and gains powerful Obi Blood Demon Art, allowing her to manipulate her body like deadly ribbons that slice through entire buildings. In the Entertainment District arc, she appears as the main face of Upper Moon Six, confidently dominating her territory and underestimating the Demon Slayers who enter it. Her attacks are graceful yet lethal, trapping enemies in her obi and destroying entire sections of the city. However, her arrogance leads her to underestimate Nezuko and the growing coordination of Tanjiro’s team. As the battle escalates, Daki struggles when Nezuko enters her awakened demon form and begins overpowering her. Her downfall begins when her overconfidence breaks under pressure, exposing her lack of real experience compared to stronger Upper Moons. When her brother Gyutaro emerges fully, she realizes her dependence on him in both battle and survival. In the final confrontation, she is decapitated by the combined efforts of the Demon Slayers, which weakens their shared existence. Daki’s death triggers Gyutaro’s final rage, sealing both of their fates. In the end, she dies as a proud but broken demon, whose beauty masked a life filled with pain, dependency, and unresolved suffering alongside her brother.",
  
  "Gyutaro": "Gyutaro is Upper Moon Six, a venomous and deeply tragic demon born from extreme poverty, hatred, and survival in the lowest parts of the Entertainment District. Even before becoming a demon, his life was defined by suffering and rejection, which twisted his worldview into one fueled by resentment. After dying, he is reborn as a demon by Muzan and becomes Daki’s protector, sharing his body with her and emerging only when necessary. In battle, Gyutaro is the true core of Upper Moon Six, wielding dual sickles coated in deadly poison that can kill Hashira with a single scratch. During the Entertainment District arc, he overwhelms Tanjiro’s group and Tengen Uzui with brutal speed, regeneration, and tactical cruelty. His fighting style is chaotic yet precise, using poison and blood manipulation to control the battlefield. Despite his power, his emotional core is his bond with Daki, which is both loving and toxic, as he constantly protects her while also dragging her deeper into violence. As the battle reaches its peak, Gyutaro’s rage fully erupts when Daki is defeated, showing how deeply tied his existence is to her. However, this emotional instability becomes his weakness as the Demon Slayers exploit their separation. In the final moments, he is overwhelmed by combined teamwork and sacrifice, especially from Tengen, Tanjiro, Zenitsu, and Inosuke. Gyutaro dies reflecting on his past, realizing that his life of hatred only led to more suffering for both him and his sister. In the end, he remains one of the most tragic Upper Moons, a demon shaped entirely by pain who never escaped his origins.",
  
  "Gyokko": "Gyokko is Upper Moon Five, a grotesque and obsessive demon artist who views human life as raw material for his “masterpieces,” created through horrifyingly twisted fish-like transformations. Before becoming a demon, he was already detached from morality, but after gaining Muzan’s blood, his cruelty evolved into artistic obsession. He first becomes relevant during the Swordsmith Village arc, where he infiltrates the village hidden within pots, silently preparing his massacre. There, he unleashes his Blood Demon Art, summoning aquatic monstrosities and manipulating bodies into disturbing art pieces. Gyokko initially underestimates the Demon Slayers, especially Muichiro Tokito, viewing them as insignificant compared to his “art.” However, as the battle progresses, Muichiro begins to break through his illusions and overwhelming techniques. Gyokko escalates by revealing his true form, a horrifying fusion of tentacles, fish scales, and warped flesh, believing it to be his ultimate creation. Despite his confidence, Muichiro’s awakened strength and mist techniques begin to dismantle his attacks piece by piece. His arrogance becomes his downfall as he fails to understand human resolve and adaptability. In the final confrontation, Gyokko is completely overpowered by Muichiro, proving that his so-called “art” is nothing more than cruelty without meaning. In the end, Gyokko dies as a delusional artist who could never create true beauty, only suffering disguised as creation.",
  
  "Muzan": "Muzan Kibutsuji is the origin of all demons, a cold and calculating being who has existed for over a thousand years, constantly evolving and hiding in human society to avoid death. His existence begins the entire tragedy of Demon Slayer when he creates demons through his blood, seeking perfection and immortality. In the early arcs, his influence is felt indirectly as Tanjiro slowly uncovers the truth behind demon creation. In the Asakusa arc, Tanjiro finally meets Muzan in human disguise, where Muzan casually murders civilians and realizes the threat Tanjiro’s family lineage poses. After this, Muzan sends Upper Moons and lower demons to eliminate the Demon Slayers, escalating the war. Throughout the series, he manipulates demons like pawns, showing no empathy even toward his strongest creations. In the Entertainment District and Swordsmith Village arcs, his Upper Moons carry out his will while he remains hidden, analyzing the Demon Slayer Corps from the shadows. During the Hashira Training arc, Muzan prepares for the final confrontation, tightening his control and eliminating weaknesses. In the Infinity Castle arc, he reveals his full power as he drags the entire Demon Slayer Corps into his domain for the final battle. He fights relentlessly, adapting to every injury and counterattack, proving why he is called the ultimate demon. Even after being pushed to the brink, he refuses to accept defeat, embodying pure survival instinct. In his final moments, he is overwhelmed by the combined efforts of all Hashira and Tanjiro’s allies, marking the collapse of centuries of terror. However, his bloodline curse nearly destroys Tanjiro as Muzan’s influence lingers even after death. In the end, Muzan’s defeat ends the era of demons, but his legacy of fear, destruction, and obsession with immortality permanently reshapes the world."
  };


  
  document.querySelectorAll(".character-card").forEach(card => {
    card.addEventListener("click", () => {

      const name = card.querySelector("h3").innerText;

      modalTitle.innerText = name;
      modalText.innerText = descriptions[name] || "No description yet.";
      modal.style.display = "flex";

      
      triggerAwakening(card);
    });
  });


  
  

  const breathingData = {
    Water: "Balanced and adaptable style focused on fluid movement.",
    Fire: "Aggressive explosive offense.",
    Thunder: "Ultra fast burst movement.",
    Beast: "Wild instinct-based combat.",
    Love: "Flexible emotional combat style.",
    Insect: "Poison precision attacks.",
    Wind: "Chaotic cutting slashes.",
    Stone: "Heavy defensive power.",
    Serpent: "Unpredictable twisting attacks.",
    Sound: "Rhythm-based combat.",
    HinokamiKagura: "Sun breathing divine flame style.",
    Moon: "Crescent slash demon style.",
    Galaxy: "1000% luck broken myth style."
  };

  let isOpen = false;

  window.toggleCompare = function () {
    const panel = document.getElementById("compareWidget");
    const orb = document.getElementById("orbButton");

    isOpen = !isOpen;

    if (isOpen) {
      panel.classList.add("active");
      orb.style.transform = "scale(0.9) rotate(90deg)";
    } else {
      panel.classList.remove("active");
      orb.style.transform = "scale(1) rotate(0deg)";
    }
  };


  window.compareStyles = function () {
    const a = document.getElementById("styleA").value;
    const b = document.getElementById("styleB").value;

    const result = document.getElementById("compareResult");

    const score = {
      Water: 8, Fire: 8, Thunder: 8,
      Beast: 9, Love: 6, Insect: 6.5,
      Wind: 8, Stone: 9, Serpent: 7,
      Sound: 7, HinokamiKagura: 13,
      Moon: 13, Galaxy: 13
    };

    let winner, reason;

    if (score[a] > score[b]) {
      winner = a;
      reason = `${a} dominates overall efficiency.`;
    } else if (score[b] > score[a]) {
      winner = b;
      reason = `${b} dominates raw battlefield power.`;
    } else {
      winner = "Even Match";
      reason = "Both are equally balanced.";
    }

    result.innerHTML = `
<b>${a}</b>: ${breathingData[a]}<br><br>
<b>${b}</b>: ${breathingData[b]}<br><br>
<hr>
<b>Winner:</b> ${winner}<br>
<b>Verdict:</b> ${reason}
    `;
  };


 
  const characterPower = {
    "Tanjiro (Water)": 78,
    "Tanjiro (Hinokami)": 92,
    "Tanjiro (DKT)": 100,
    "Nezuko": 85,
    "Zenitsu": 80,
    "Inosuke": 82,
    "Rengoku": 88,
    "Giyu": 87,
    "Shinobu": 70,
    "Sanemi": 90,
    "Gyomei": 94,
    "Obanai": 87,
    "Mitsuri": 86,
    "Muichiro": 85,
    "Yoriichi": 120,
    "Muzan": 98,
    "Akaza": 91,
    "Doma": 93,
    "Kokushibo": 97,
    "Gyokko": 80,
    "Hantengu": 82,
    "Gyutaro and Daki": 70
  };

  const charA = document.getElementById("charA");
  const charB = document.getElementById("charB");

  Object.keys(characterPower).forEach(name => {
    charA.innerHTML += `<option>${name}</option>`;
    charB.innerHTML += `<option>${name}</option>`;
  });

  let charOpen = false;

  window.toggleCharCompare = function () {
    const panel = document.getElementById("charCompareWidget");

    charOpen = !charOpen;

    if (charOpen) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  };


  window.compareCharacters = function () {
    const a = document.getElementById("charA").value;
    const b = document.getElementById("charB").value;

    const result = document.getElementById("charResult");

    const scoreA = characterPower[a];
    const scoreB = characterPower[b];

    let winner, reason;

    if (scoreA > scoreB) {
      winner = a;
      reason = `${a} dominates with superior scaling.`;
    } else if (scoreB > scoreA) {
      winner = b;
      reason = `${b} overwhelms with raw stats.`;
    } else {
      winner = "Even Match";
      reason = "Perfectly balanced fight.";
    }

    result.innerHTML = `
<b>${a}</b>: ${scoreA}<br>
<b>${b}</b>: ${scoreB}<br><br>
<hr>
<b>Winner:</b> ${winner}<br>
<b>Verdict:</b> ${reason}
    `;
  };



  const title = document.querySelector(".main-title");
  const fxLayer = document.getElementById("breathingFX");

  title.addEventListener("click", () => {

    const flash = document.createElement("div");
    flash.className = "fire-flash";
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 1000);

    for (let i = 0; i < 6; i++) {
      const ring = document.createElement("div");
      ring.className = "pulse-ring";

      ring.style.left = "50%";
      ring.style.top = "30%";

      ring.style.borderColor = `hsl(${20 + i * 15}, 100%, 60%)`;
      ring.style.boxShadow = `0 0 25px hsl(${20 + i * 15}, 100%, 55%)`;

      fxLayer.appendChild(ring);

      setTimeout(() => ring.remove(), 1200);
    }
  });


 
  let opened = false;

  document.querySelector(".summary_text").addEventListener("click", () => {
    if (opened) return;
    opened = true;
    openInfinityDoors();
  });

  function openInfinityDoors() {
    const leftDoor = document.createElement("div");
    const rightDoor = document.createElement("div");

    leftDoor.className = "door left-door";
    rightDoor.className = "door right-door";

    document.body.appendChild(leftDoor);
    document.body.appendChild(rightDoor);

    setTimeout(() => {
      leftDoor.style.transform = "translateX(-100%)";
      rightDoor.style.transform = "translateX(100%)";
    }, 100);

    setTimeout(() => {
      showExpandedSummary();
    }, 1200);
  }

  function showExpandedSummary() {
    const panel = document.createElement("div");

    panel.style.position = "fixed";
    panel.style.inset = "0";
    panel.style.background = "rgba(0,0,0,0.95)";
    panel.style.color = "white";
    panel.style.zIndex = "99999";
    panel.style.padding = "60px";
    panel.style.overflowY = "auto";

    panel.innerHTML = `
      <h1 style="color:#ff6a00;">Infinity Castle Archive</h1>
      <p style="margin-top:20px;line-height:1.8;">
        ${detailedSummaryText()}
      </p>
      <button onclick="location.reload()" style="
        margin-top:30px;
        padding:12px 20px;
        background:#ff6a00;
        border:none;
        font-weight:bold;
      ">Exit Archive</button>
    `;

    document.body.appendChild(panel);
  }

  function detailedSummaryText() {
    return `
Tanjiro’s journey evolves through loss, growth, and war...
Final Selection → Innocence shattered  
Natagumo → Fear unlocked  
Mugen Train → Grief awakens strength  
Infinity Castle → Final collapse of worlds
    `;
  }

});

const pixelArena = document.getElementById("pixelArena");
const pixelBtn = document.getElementById("pixelBattleBtn");

pixelBtn.addEventListener("click", () => {
  pixelArena.style.display = "block";
});

function closePixelArena(){
  pixelArena.style.display = "none";
}

const pixelImages = {
  Tanjiro: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/622427b748fd5d9a034e3f5b_Tanjiro.png",
  Nezuko: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621bc678af1a1a0626de6680_Nezuko.png",
  Zenitsu: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621beffb64ee353ee4675bb9_Zenitsu.png",
  Inosuke: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621bc62259ea7b55d32d2a8f_Inosuke.png",
  Rengoku: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621b84301126b63588f245ce_Rengoku.png",
  Tomioka: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621b8499e190fa77dd02ed3d_Tomioka.png",
  Shinobu: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621b86e273cac952dfb20cf6_Shinobu.png",
  Sanemi: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621b84d91a15cc5c7753a1e5_Sanemi.png",
  Gyomei: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621b85d0abdb7b087bbd6dd8_Himejima.png",
  Muichiro: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621b892153d9ed67761bcdf6_Muichiro%20Tokito.png",
  Mitsuri: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621b87a722af26117bba1489_Kanroji.png",
  Obanai: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621b867b5857fc2e8df3c1fe_Iguro.png",
  Uzui: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621b87383c1f287bf5ff86ae_Tengen%20Uzui.png",
  Akaza: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/6216f979986f62433e908d1c_Akaza.png",
  Doma: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621bd02f7f76fb3e65d794f2_Doma.png",
  Kokushibo: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621bcba64c58054353ae65a3_Kokushibo.png",
  Muzan: "https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621bc7777098dc607b59aac2_Muzan.png"
};
const pixelA = document.getElementById("pixelCharA");
const pixelB = document.getElementById("pixelCharB");

Object.keys(pixelImages).forEach(name=>{
  pixelA.innerHTML += `<option>${name}</option>`;
  pixelB.innerHTML += `<option>${name}</option>`;
});

function spawnPixelChars(){

  document.querySelectorAll(".pixel-char").forEach(e=>e.remove());

  const a = pixelCharA.value;
  const b = pixelCharB.value;

  const left = document.createElement("img");
  left.src = pixelImages[a];
  left.className = "pixel-char";
  left.style.left = "20%";

  const right = document.createElement("img");
  right.src = pixelImages[b];
  right.className = "pixel-char";
  right.style.right = "20%";

  pixelArena.appendChild(left);
  pixelArena.appendChild(right);

 
  const winner = characterPower[a] > characterPower[b] ? left : right;


  setTimeout(() => {
    left.classList.add("fight-left");
    right.classList.add("fight-right");
  }, 500);

  setTimeout(() => {
    winner.classList.add("hit");
  }, 1000);

  setTimeout(() => {
    winner.style.transform = "scale(1.3)";
    winner.style.filter = "drop-shadow(0 0 25px gold)";
  }, 1600);
}
const characterPower = {
  "Tanjiro (Fully Awakened)": 92,
  Nezuko: 85,
  Zenitsu: 80,
  Inosuke: 82,
  Rengoku: 88,
  Tomioka: 87,
  Shinobu: 70,
  Sanemi: 90,
  Gyomei: 94,
  Obanai: 87,
  Mitsuri: 86,
  Muichiro: 85,
  Uzui: 88,
  Akaza: 91,
  Doma: 93,
  Kokushibo: 97,
  Muzan: 98
};

setTimeout(() => {
  const p1 = left;
  const p2 = right;

  const powerA = characterPower[a];
  const powerB = characterPower[b];

  const loser = powerA > powerB ? p2 : p1;

  loser.classList.add("death");
}, 1200);




const breathingBtn =
document.getElementById("breathingBtn");

const archive =
document.getElementById("breathingArchive");

const closeArchive =
document.getElementById("closeArchive");

const styleButtons =
document.getElementById("styleButtons");

const styleName =
document.getElementById("styleName");

const styleInfo =
document.getElementById("styleInfo");




breathingBtn.onclick = () => {

archive.style.display="block";

};




closeArchive.onclick = () => {

archive.style.display="none";

};



const breathingStyles = {

Sun: {
creator: "Yoriichi Tsugikuni",
forms: "12+",
users: "Tanjiro Kamado (adapted), Yoriichi Tsugikuni",
description: "The original Breathing Style. Fast, sacred, and absurdly powerful. Built around divine sunlight energy that overwhelms demon regeneration. Basically the 'source code' of all breathing styles."
},

Moon: {
creator: "Kokushibo (Michikatsu Tsugikuni)",
forms: "16+",
users: "Kokushibo",
description: "Twisted evolution of Sun Breathing. Uses crescent-shaped slashes that multiply and distort mid-air. Elegant but terrifying, like art that wants you gone."
},

Water: {
creator: "Unknown (refined by Sakonji Urokodaki)",
forms: "11",
users: "Tanjiro Kamado, Giyu Tomioka",
description: "Smooth, flowing combat style that adapts like water itself. Focuses on defense, redirection, and precise counterattacks. Calm on surface, deadly underneath."
},

Flame: {
creator: "Shinjuro Rengoku lineage",
forms: "9",
users: "Kyojuro Rengoku",
description: "Explosive offense with burning momentum. Every strike feels like a rising inferno. Built for raw power and courage, no hesitation allowed."
},

Thunder: {
creator: "Unknown (refined by Jigoro Kuwajima)",
forms: "7",
users: "Zenitsu Agatsuma, Kaigaku",
description: "Lightning-fast bursts of movement. High-speed execution, low margin for error. One clean strike decides everything."
},

Wind: {
creator: "Unknown",
forms: "9",
users: "Sanemi Shinazugawa",
description: "Aggressive, chaotic slashes that tear through defenses like a storm. Relentless pressure style that never gives space."
},

Stone: {
creator: "Unknown",
forms: "7",
users: "Gyomei Himejima",
description: "Heavy, grounded, and overwhelming force. Uses chained weapons and raw strength. Slow but absolutely unavoidable once it lands."
},

Mist: {
creator: "Muichiro Tokito",
forms: "7",
users: "Muichiro Tokito",
description: "Unpredictable movement that confuses perception. Attacks appear and vanish like fog. Enemies lose track of reality mid-fight."
},

Love: {
creator: "Mitsuri Kanroji",
forms: "6",
users: "Mitsuri Kanroji",
description: "Flexible, whip-like sword techniques powered by extreme physical agility. Fast, emotional, and unpredictable like heartbeat spikes."
},

Sound: {
creator: "Unknown",
forms: "5",
users: "Tengen Uzui",
description: "Explosions, rhythm, and calculated chaos. Uses sound analysis and dual blades with explosives. Flashy but tactically precise."
},

Serpent: {
creator: "Obanai Iguro",
forms: "5",
users: "Obanai Iguro",
description: "Curving, snake-like sword paths that bend unpredictably. Focused on tight control and lethal precision in confined angles."
},

Insect: {
creator: "Shinobu Kocho",
forms: "4",
users: "Shinobu Kocho",
description: "No raw slashing power, only precision poisoning strikes. Designed to bypass demon durability with chemistry instead of strength."
},

Beast: {
creator: "Inosuke Hashibira",
forms: "11",
users: "Inosuke Hashibira",
description: "Wild, instinct-based fighting style with dual jagged swords. Reads enemies through perception instead of logic. Pure battlefield animal energy."
},

Flower: {
creator: "Kanao Tsyuri",
forms: "7",
users: "Kanao Tsuyuri",
description: "Elegant, prediction-based sword style with precise timing. Focuses on vision clarity and reading future movement paths."
},

HinokamiKagura: {
creator: "Kamado Family Tradition",
forms: "13 (linked with Sun breathing)",
users: "Tanjiro Kamado",
description: "A ceremonial dance passed through generations that secretly mirrors Sun Breathing. Built on endurance, rhythm, and fire-like motion cycles."
},

American: {
creator: "Freedom Department (classified 💀)",
forms: "12",
users: "Genya Shinazugawa + Trump ",
description: "Unpredictable ranged gun-melee hybrid style with chaotic burst timing and explosive energy output. Completely unbalanced but somehow works."
},

Galaxy: {
creator: "Murata",
forms: "∞",
users: "Murata",
description: "A style used by Murata that grants 10000% luck all across every anime verse."
}

};


Object.keys(breathingStyles)
.forEach(style=>{

const btn =
document.createElement("button");

btn.className="style-btn";

btn.innerText=style;

styleButtons.appendChild(btn);



btn.onclick=()=>{

document
.querySelectorAll(".style-btn")
.forEach(b=>
b.classList.remove("active")
);

btn.classList.add("active");

const data =
breathingStyles[style];

styleName.innerText=style;

styleInfo.innerHTML=`

<b>Creator:</b>
${data.creator}

<br><br>

<b>Forms:</b>
${data.forms}

<br><br>

<b>Users:</b>
${data.users}

<br><br>

<b>Description:</b>

<br>

${data.description}

`;

};

});





const SLAYER_CHARACTERS = [
  "Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira", "Kanao Tsuyuri",
  "Genya Shinazugawa", "Murata", "Aoi Kanzaki", "Giyu Tomioka", "Kyojuro Rengoku", "Tengen Uzui",
  "Shinobu Kocho", "Mitsuri Kanroji", "Muichiro Tokito", "Gyomei Himejima", "Sanemi Shinazugawa",
  "Obanai Iguro", "Kagaya Ubuyashiki", "Amane Ubuyashiki", "Hinaki Ubuyashiki", "Nichika Ubuyashiki",
  "Kiriya Ubuyashiki", "Kanata Ubuyashiki", "Muzan Kibutsuji", "Kokushibo", "Doma", "Akaza",
  "Hantengu", "Gyokko", "Gyutaro", "Daki", "Rui", "Enmu", "Sakonji Urokodaki", "Jigoro Kuwajima",
  "Sabito", "Makomo", "Hotaru Haganezuka", "Kozo Kanamori", "Tecchin Tecchikawahara", "Kanae Kocho",
  "Sumi Nakahara", "Naho Takada", "Kiyo Terauchi", "Takeo Kamado", "Hanako Kamado", "Shigeru Kamado",
  "Rokuta Kamado", "Tamayo", "Yushiro", "Yoriichi", "Michikatsu"
];

const NODE_FORMULAS = {
  train: { label: "⚔️ Training", formula: "trains under the guidance of", class: "node-train" },
  fight: { label: "💥 Combat", formula: "engages in mutual combat against", class: "node-fight" },
  injury: { label: "🩸 Injury", formula: "is severely injured during an ambush by", class: "node-injury" },
  survival: { label: "🛡️ Survival", formula: "barely survives a deadly encounter with", class: "node-survival" },
  death: { label: "💀 Death", formula: "dies against ", class: "node-death" },
  climax: { label: "🌌 Climax", formula: "awakens a legendary slayer mark fighting", class: "node-climax" }
};

// Custom timeline conclusion states
const ENDING_OPTIONS = [
  "the total defeat of Muzan Kibutsuji",
  "a tragic timeline erasure by the Upper Moons",
  "the complete restoration of Nezuko's humanity",
  "the dawn of a peaceful era free of demons",
  "a bittersweet tactical retreat into hiding",
  "the rising of a new generation of Hashira"
];

let activeConnections = [];
let nodeCounter = 0;
let connectingSourcePort = null;

window.toggleTimelineStudio = function() {
  const modal = document.getElementById("timelineStudioModal");
  if (modal) modal.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {
  initializeSlayerToolbox();
  setupCanvasLinkListeners();
  
  spawnInteractiveEndNode(1200, 300);

  const container = document.getElementById("canvasContainer");
  if (container) {
    container.scrollLeft = 800;
    container.scrollTop = 150;
  }
});

function initializeSlayerToolbox() {
  const categories = {
    catTrain: 'train', catFight: 'fight', catInjury: 'injury',
    catSurvival: 'survival', catDeath: 'death', catClimax: 'climax'
  };

  Object.keys(categories).forEach(catId => {
    const container = document.getElementById(catId);
    if (!container) return;
    const typeKey = categories[catId];
    
    SLAYER_CHARACTERS.forEach(name => {
      const block = document.createElement("div");
      block.className = "template-block";
      block.style.borderLeftColor = getCategoryColor(typeKey);
      block.innerText = `${name} [${NODE_FORMULAS[typeKey].label[0]}]`;
      block.setAttribute("draggable", "true");
      
      block.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", JSON.stringify({ characterName: name, nodeType: typeKey }));
      });
      container.appendChild(block);
    });
  });
}

function getCategoryColor(type) {
  if (type === 'train') return '#4e54c8';
  if (type === 'fight') return '#ff6a00';
  if (type === 'injury') return '#d11a2a';
  if (type === 'survival') return '#2ecc71';
  if (type === 'death') return '#7f8c8d';
  return '#9b59b6';
}

window.toggleCategory = function(catId) {
  document.querySelectorAll(".category-content").forEach(el => {
    if (el.id !== catId) el.classList.remove("active");
  });
  const targeted = document.getElementById(catId);
  if (targeted) targeted.classList.toggle("active");
};

window.filterToolboxBlocks = function() {
  const filter = document.getElementById("characterFilter").value.toLowerCase();
  document.querySelectorAll(".template-block").forEach(block => {
    const match = block.innerText.toLowerCase().includes(filter);
    block.style.display = match ? "block" : "none";
  });
};

function setupCanvasLinkListeners() {
  const container = document.getElementById("canvasContainer");
  const canvas = document.getElementById("sandboxCanvas");
  
  container.addEventListener("dragover", (e) => e.preventDefault());
  
  container.addEventListener("drop", (e) => {
    e.preventDefault();
    try {
      const rawData = e.dataTransfer.getData("text/plain");
      if (!rawData) return;
      
      const data = JSON.parse(rawData);
      const name = data.characterName;
      const type = data.nodeType;
      if (!name || !type) return;

      const rect = canvas.getBoundingClientRect();
      const dropX = e.clientX - rect.left;
      const dropY = e.clientY - rect.top;

      spawnNodeOnCanvas(name, type, dropX, dropY);
    } catch (err) {
      console.error(err);
    }
  });

  let activeDragNode = null;
  let offsetX = 0, offsetY = 0;

  canvas.addEventListener("mousedown", (e) => {
    const header = e.target.closest(".node-header");
    if (header && !e.target.classList.contains("node-delete-btn")) {
      activeDragNode = header.closest(".flow-node");
      const rect = activeDragNode.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      activeDragNode.style.zIndex = "1000";
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (activeDragNode) {
      const rect = canvas.getBoundingClientRect();
      let newX = e.clientX - rect.left - offsetX;
      let newY = e.clientY - rect.top - offsetY;
      
      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX > 4730) newX = 4730; 
      if (newY > 4920) newY = 4920;

      activeDragNode.style.left = `${newX}px`;
      activeDragNode.style.top = `${newY}px`;
      redrawVectorConnectingLines();
    }
  });

  document.addEventListener("mouseup", () => {
    if (activeDragNode) {
      activeDragNode.style.zIndex = "5";
      activeDragNode = null;
    }
  });
}

function spawnNodeOnCanvas(name, type, x, y) {
  nodeCounter++;
  const nodeId = `node-id-${nodeCounter}`;
  const canvas = document.getElementById("sandboxCanvas");
  const formulaObj = NODE_FORMULAS[type];

  let optionsHTML = `<select class="node-target-select" onchange="interpretChronologySummary()">`;
  SLAYER_CHARACTERS.forEach(char => {
    const isSelected = (char === "Muzan Kibutsuji" && name !== "Muzan Kibutsuji") || (char === "Sakonji Urokodaki" && type === "train" && name !== "Sakonji Urokodaki");
    optionsHTML += `<option value="${char}" ${isSelected ? 'selected' : ''}>${char}</option>`;
  });
  optionsHTML += `</select>`;

  const node = document.createElement("div");
  node.id = nodeId;
  node.className = `flow-node ${formulaObj.class}`;
  node.style.left = `${x - 135}px`;
  node.style.top = `${y - 40}px`;

  node.innerHTML = `
    <div class="node-header">
      <span>${formulaObj.label}</span>
      <span class="node-delete-btn" onclick="deleteNodeFromCanvas('${nodeId}')">✕</span>
    </div>
    <div class="node-body">
      <p class="node-instruction-sentence">
        <strong>${name}</strong> ${formulaObj.formula} ${optionsHTML}
      </p>
    </div>
    <div class="node-port input-port" data-port-id="${nodeId}-in">＝</div>
    <div class="node-port output-port" data-port-id="${nodeId}-out">＝</div>
  `;

  node.querySelectorAll(".node-port").forEach(port => {
    port.addEventListener("click", (e) => {
      e.stopPropagation();
      handlePortLinkConnection(e.target);
    });
  });

  canvas.appendChild(node);
  redrawVectorConnectingLines();
  interpretChronologySummary();
}

function spawnInteractiveEndNode(x, y) {
  const canvas = document.getElementById("sandboxCanvas");
  if (!canvas) return;

  let optionsHTML = `<select class="node-target-select end-dropdown-style" onchange="interpretChronologySummary()" style="color: #e67e22; border-color: rgba(230,126,34,0.3);">`;
  ENDING_OPTIONS.forEach(ending => {
    optionsHTML += `<option value="${ending}">${ending}</option>`;
  });
  optionsHTML += `</select>`;

  const node = document.createElement("div");
  node.id = "node-end-sentinel";
  node.className = "flow-node core-end-node";
  node.style.left = `${x}px`;
  node.style.top = `${y}px`;

  node.innerHTML = `
    <div class="node-header">
      <span>🎯 Timeline End</span>
    </div>
    <div class="node-body" style="padding: 10px;">
      <p class="node-instruction-sentence" style="font-size:11px;">
        The story concludes with ${optionsHTML}
      </p>
    </div>
    <div class="node-port input-port" data-port-id="node-end-sentinel-in">＝</div>
  `;

  node.querySelector(".node-port").addEventListener("click", (e) => {
    e.stopPropagation();
    handlePortLinkConnection(e.target);
  });

  canvas.appendChild(node);
}

function handlePortLinkConnection(portEl) {
  const isOutput = portEl.classList.contains("output-port");
  const portId = portEl.getAttribute("data-port-id");

  if (!connectingSourcePort) {
    connectingSourcePort = { el: portEl, id: portId, isOutput };
    portEl.style.background = "#e74c3c";
  } else {
    const source = connectingSourcePort;
    source.el.style.background = "";

    if (source.id !== portId && source.isOutput !== isOutput) {
      const outId = source.isOutput ? source.id : portId;
      const inId = source.isOutput ? portId : source.id;

      const exists = activeConnections.some(c => c.from === outId && c.to === inId);
      if (!exists) {
        activeConnections.push({ from: outId, to: inId });
        redrawVectorConnectingLines();
        interpretChronologySummary();
      }
    }
    connectingSourcePort = null;
  }
}

function redrawVectorConnectingLines() {
  const svg = document.getElementById("vectorLinkLayer");
  if (!svg) return;
  svg.innerHTML = "";

  activeConnections.forEach(conn => {
    const fromPort = document.querySelector(`[data-port-id="${conn.from}"]`);
    const toPort = document.querySelector(`[data-port-id="${conn.to}"]`);
    
    if (fromPort && toPort) {
      const canvasRect = document.getElementById("sandboxCanvas").getBoundingClientRect();
      const rFrom = fromPort.getBoundingClientRect();
      const rTo = toPort.getBoundingClientRect();

      const x1 = rFrom.left - canvasRect.left + (rFrom.width / 2);
      const y1 = rFrom.top - canvasRect.top + (rFrom.height / 2);
      const x2 = rTo.left - canvasRect.left + (rTo.width / 2);
      const y2 = rTo.top - canvasRect.top + (rTo.height / 2);

      const controlOffset = Math.abs(x2 - x1) * 0.5;
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", `M ${x1} ${y1} C ${x1 + controlOffset} ${y1}, ${x2 - controlOffset} ${y2}, ${x2} ${y2}`);
      path.setAttribute("class", "timeline-svg-line");
      
      svg.appendChild(path);
    }
  });
}

function interpretChronologySummary() {
  const body = document.getElementById("drawerBody");
  if (!body) return;
  if (activeConnections.length === 0) {
    body.innerHTML = `<p class="empty-narrative-msg">No connections mapped. Wire nodes together using the [＝] joints to generate your live timeline script...</p>`;
    return;
  }

  body.innerHTML = "";
  let processingQueue = [];
  let stepsLogged = 0;

  const targets = activeConnections.map(c => c.to);
  activeConnections.forEach(c => {
    if (!targets.includes(c.from) && !processingQueue.includes(c.from)) {
      processingQueue.push(c.from);
    }
  });

  if (processingQueue.length === 0 && activeConnections.length > 0) {
    processingQueue.push(activeConnections[0].from);
  }

  let mappedLogStrings = [];

  while (processingQueue.length > 0) {
    const currentPortId = processingQueue.shift();
    const nodeId = currentPortId.split("-out")[0].split("-in")[0];
    const nodeEl = document.getElementById(nodeId);
    
    if (nodeEl) {
      if (nodeId === "node-end-sentinel") {
        const selectEnd = nodeEl.querySelector(".node-target-select");
        const chosenEnding = selectEnd ? selectEnd.value : "a mysterious conclusion";
        const statement = `🏁 <strong>The story concludes with ${chosenEnding}.</strong>`;
        if (!mappedLogStrings.includes(statement)) {
          mappedLogStrings.push(statement);
        }
        continue; 
      }

      const name = nodeEl.querySelector("strong").innerText;
      const selectEl = nodeEl.querySelector(".node-target-select");
      const targetVal = selectEl ? selectEl.value : "Unknown";
      
      let actionText = "";
      if (nodeEl.classList.contains("node-train")) actionText = NODE_FORMULAS.train.formula;
      else if (nodeEl.classList.contains("node-fight")) actionText = NODE_FORMULAS.fight.formula;
      else if (nodeEl.classList.contains("node-injury")) actionText = NODE_FORMULAS.injury.formula;
      else if (nodeEl.classList.contains("node-survival")) actionText = NODE_FORMULAS.survival.formula;
      else if (nodeEl.classList.contains("node-death")) actionText = NODE_FORMULAS.death.formula;
      else actionText = NODE_FORMULAS.climax.formula;

      const statement = `<strong>${name}</strong> ${actionText} <strong>${targetVal}</strong>.`;
      if (!mappedLogStrings.includes(statement)) {
        mappedLogStrings.push(statement);
      }

      const children = activeConnections.filter(c => c.from === `${nodeId}-out`);
      children.forEach(child => {
        if (!processingQueue.includes(child.to)) processingQueue.push(child.to);
      });
    }
    stepsLogged++;
    if (stepsLogged > 150) break;
  }

  mappedLogStrings.forEach((text, index) => {
    const logItem = document.createElement("div");
    logItem.className = "narrative-step-log";
    logItem.innerHTML = `Event ${index + 1}: ${text}`;
    body.appendChild(logItem);
  });
}

window.deleteNodeFromCanvas = function(nodeId) {
  if (nodeId === "node-end-sentinel") return;
  const node = document.getElementById(nodeId);
  if (node) {
    activeConnections = activeConnections.filter(c => !c.from.startsWith(nodeId) && !c.to.startsWith(nodeId));
    node.remove();
    redrawVectorConnectingLines();
    interpretChronologySummary();
  }
};

window.clearTimelineWorkspace = function() {
  activeConnections = [];
  document.querySelectorAll(".flow-node").forEach(node => {
    if (node.id !== "node-end-sentinel") node.remove();
  });
  redrawVectorConnectingLines();
  interpretChronologySummary();
};

window.toggleNarrativeDrawer = function() {
  const drawer = document.getElementById("narrativeDrawer");
  if (drawer) drawer.classList.toggle("open");
};


let activeBrush = "forest";

function toggleFeaturesHub(open) {
  const overlay = document.getElementById("dsFeaturesOverlayPanel");

  if (open) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function switchHubFeatureTab(viewId, btn) {
  document.querySelectorAll(".hub-feature-panel-view")
    .forEach(v => v.classList.remove("active"));

  document.getElementById(viewId).classList.add("active");

  document.querySelectorAll(".sidebar-tab-btn")
    .forEach(b => b.classList.remove("active"));

  btn.classList.add("active");
}

function setActivePaintingBrush(type, btn) {
  activeBrush = type;

  document.querySelectorAll(".palette-brush-node")
    .forEach(b => b.classList.remove("active"));

  btn.classList.add("active");
}

function initGrid() {
  const grid = document.getElementById("taishoInteractiveGridCanvas");

  for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.className = "grid-tile-slot";

    cell.addEventListener("click", () => {
      cell.setAttribute("data-terrain", activeBrush);
    });

    grid.appendChild(cell);
  }
}

function clearActiveMapCanvasGrid() {
  document.querySelectorAll(".grid-tile-slot").forEach(tile => {
    tile.removeAttribute("data-terrain");
  });
}

function serializeAndSaveMapLayout() {
  const data = [...document.querySelectorAll(".grid-tile-slot")]
    .map(t => t.getAttribute("data-terrain") || "empty");

  localStorage.setItem("taishoMap", JSON.stringify(data));

  alert("Map saved 💾");
}

window.onload = initGrid;


const BREATHING_DATA = {
  sun: [
    { form: "Dance", desc: "A singular, high-powered downward vertical slash infused with solar heat." },
    { form: "Clear Blue Sky", desc: "The user spins their body horizontally to release a defensive 360-degree blade arc." },
    { form: "Burning Sun", desc: "A fast, circular vortex assault designed to deflect incoming projectile threats." },
    { form: "Solar Heat Haze", desc: "A deceptive charging slash where the blade appears to bend and blur like thermal air waves, making it impossible to parry." },
    { form: "Setting Sun Transformation", desc: "The user flips backward into the air, unleashing an upside-down flaming wheel slash directly over the target." }
  ],
  water: [
    { form: "Water Surface Slash", desc: "A continuous, horizontal cross-cut generating fluid fluidic pressure profiles." },
    { form: "Water Wheel", desc: "The user leaps into a dynamic front-flip, creating a spinning wheel of pure kinetic water." },
    { form: "Flowing Dance", desc: "An elegant, winding movement path that weaves around obstacles while slicing targets smoothly." },
    { form: "Striking Tide", desc: "A brutal sequence of multiple consecutive slashes that twist and mimic a roaring tidal wave crashing down." },
    { form: "Constant Flux", desc: "The ultimate form: a continuous, rotating charge that gains momentum and kinetic cutting power with every turn, taking the shape of a water dragon." }
  ],
  fire: [
    { form: "Unknowing Fire", desc: "A high-speed charging pierce that erupts into forward-facing volcanic pressure waves." },
    { form: "Rising Scorching Sun", desc: "An explosive upward slash utilizing defensive thermal convection paths." },
    { form: "Blazing Universe", desc: "A brutal downward heavy strike that splits ground structures with pure heat." },
    { form: "Blooming Flame Undulation", desc: "The user spins their sword in a fast circular motion, creating a seamless wall of flames that deflects all incoming attacks." },
    { form: "Flame Tiger", desc: "A series of high-impact slashes carrying immense heat that manifest visually as a spectral tiger pouncing on the enemy." }
  ],
  thunder: [
    { form: "Thunderclap and Flash", desc: "An instantaneous, linear dash-and-unsheath dash executed at blinding velocity." },
    { form: "Rice Spirit", desc: "Five rapid, simultaneous lightning-fast strikes that branch outward radially." },
    { form: "Thunder Swarm", desc: "A wave of localized electrical discharges that surround and decimate targets." },
    { form: "Distant Thunder", desc: "The user releases a concentrated streak of lightning-fast thrusts from a distance, piercing air pockets." },
    { form: "Heat Lightning", desc: "A strong, sharp downward strike loaded with high-voltage electricity that shatters defensive postures instantly." }
  ],
  wind: [
    { form: "Dust Whirlwind Cutter", desc: "The user sprints forward within a violent, self-contained twisting cyclone shell." },
    { form: "Claws-Purifying Wind", desc: "A fast vertical downward strike splitting the air into 4 separate wind slashes." },
    { form: "Clean Storm Wind Tree", desc: "A massive whirlwind arc thrown directly around the user to repel threats." },
    { form: "Rising Gale Slash", desc: "An explosive upward strike where the user swings their sword to create a vertical updraft cyclone that lifts targets off their feet." },
    { form: "Cold Mountain Wind", desc: "A series of swift, circular paths that create an icy, razor-sharp localized gale, tearing through multiple zones simultaneously." }
  ]
};

let activeStyle = "sun";
let activeFormIndex = 0;

function initBreathingCodex() {
  setupStyleSelectors();
  renderActiveStyleForms();
}

function setupStyleSelectors() {
  document.querySelectorAll(".style-selector-card").forEach(card => {
    card.addEventListener("click", function() {
      document.querySelectorAll(".style-selector-card").forEach(c => c.classList.remove("active"));
      this.classList.add("active");
      
      activeStyle = this.getAttribute("data-style");
      activeFormIndex = 0;
      
      renderActiveStyleForms();
    });
  });
}

function renderActiveStyleForms() {
  const formsContainer = document.querySelector(".forms-execution-deck");
  if (!formsContainer) return;
  
  formsContainer.innerHTML = "";
  const currentForms = BREATHING_DATA[activeStyle];
  
  currentForms.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = `form-selection-node ${index === activeFormIndex ? 'active' : ''}`;
    card.innerHTML = `
      <span class="form-number-tag">Form Module 0${index + 1}</span>
      <span class="form-title-text">${item.form}</span>
    `;
    
    card.addEventListener("click", () => {
      document.querySelectorAll(".form-selection-node").forEach(n => n.classList.remove("active"));
      card.classList.add("active");
      activeFormIndex = index;
      
      updateDisplayPanel(item.form, item.desc);
    });
    
    formsContainer.appendChild(card);
  });
  
  if (currentForms[activeFormIndex]) {
    updateDisplayPanel(currentForms[activeFormIndex].form, currentForms[activeFormIndex].desc);
  }
}

function updateDisplayPanel(formName, formDesc) {
  const hudDisplay = document.getElementById("codexActiveFormDisplay");
  const theaterContent = document.querySelector(".theater-placeholder-message");
  
  if (hudDisplay) {
    const formatStyleName = activeStyle.charAt(0).toUpperCase() + activeStyle.slice(1);
    hudDisplay.textContent = `${formatStyleName} Breathing: ${formName}`;
  }
  
  if (theaterContent) {
    theaterContent.style.display = "block";
    theaterContent.innerHTML = `
      <div class="decoded-desc-wrapper">
        <p class="decoded-desc-body">${formDesc}</p>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", initBreathingCodex);


const KASUGAI_MISSIONS = [
  "CAW! Northwest town! Young girls are vanishing nightly! Locate the swamp demon immediately!",
  "CAW! Report to Mount Natagumo! Reinforcements are required! A low-ranked squad has ceased radio transmission!",
  "CAW! Head to the Entertainment District! Assist the Sound Hashira with undercover infiltration operations!",
  "CAW! Emergency! Train line operations compromised! Board the Mugen Train and rendezvous with the Flame Hashira!",
  "CAW! Proceed to the Swordsmith Village under total secrecy! Escort duty is requested for vital metallurgical assets!"
];

document.addEventListener("DOMContentLoaded", () => {
  const summonBtn = document.getElementById("summonCrowBtn");
  const closeBtn = document.getElementById("closeMissionBtn");
  const embedContainer = document.getElementById("crowEmbedContainer");
  const textOutput = document.getElementById("missionTextOutput");

  if (summonBtn && !document.querySelector('script[src="https://tenor.com/embed.js"]')) {
    const tenorScript = document.createElement("script");
    tenorScript.type = "text/javascript";
    tenorScript.async = true;
    tenorScript.src = "https://tenor.com/embed.js";
    document.body.appendChild(tenorScript);
  }

  if (summonBtn) {
    summonBtn.addEventListener("click", () => {
      embedContainer.className = "crow-embed-show";
      if (window.tapi) {
        window.tapi.parse();
      }

      const randomIndex = Math.floor(Math.random() * KASUGAI_MISSIONS.length);
      const chosenMission = KASUGAI_MISSIONS[randomIndex];

      textOutput.textContent = "";
      textOutput.classList.remove("active");
      
      setTimeout(() => {
        textOutput.textContent = chosenMission;
        textOutput.classList.add("active");
      }, 400);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      embedContainer.className = "crow-embed-hide";
      textOutput.textContent = "";
      textOutput.classList.remove("active");
    });
  }
});






