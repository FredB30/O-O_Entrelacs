<script>
const l=["Recherche de l'auteur...","","Auteur localisé.","","Statut : ● occupé à réparer quelques entrelacs","","📞 Décrochage...","","Bonjour.","","Vous êtes bien sur le répondeur de O+O/Entrelacs.","","Personne ne peut vous répondre pour le moment.","","Le titulaire de cette ligne s'est absenté afin de faire baisser son niveau de glutamate...","","...et d'avancer quelques travaux de couture laissés en suspens.","","Merci de votre patience.","","Retour prévu : dimanche prochain.","","","Biiiiip.","","",""];
const s=document.getElementById('screen');let i=0;

function afficherLigne(){if(i<l.length){s.textContent+=l[i]+"\n";i++;window.scrollTo(0,document.body.scrollHeight);setTimeout(afficherLigne,l[i-1].includes("Biiiiip")?2000:900);}}

function lancer(){
  s.textContent="";
  i=0;

  // L'AUDIO SE LANCE ICI
  const audio = new Audio('repondeur.mp3');
  audio.play().catch(()=>{});

  afficherLigne(); // le texte se lance ici
}

document.getElementById('replay').onclick=lancer;
lancer();
</script>
