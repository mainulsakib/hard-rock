// document.getElementById("searchPart").style.display="none";
document.getElementById("lyricsSection").style.display="none"
document.getElementById("fancy").style.display="none"
document.getElementById("searchBtn").addEventListener("click",function(){
   let result=document.getElementById("searchName").value
   fetch(" https://api.lyrics.ovh/suggest/"+result+"")
   
.then(info=>info.json())
.then(data=>{
    
    for (let i = 0; i < 10; i++) {
        const title = data.data[i].title;
        const artistName=data.data[i].artist.name;
       
        // console.log(title);
        // console.log(artistName)
        document.getElementsByClassName("title")[i].innerHTML=title;
        document.getElementsByClassName("artistName")[i].innerHTML=artistName;
        // document.getElementById("searchPart").style.display="block";
        document.getElementById("fancy").style.display="block"
       
    

        function lyricsBtn(buttonId,title,artist){
            document.getElementById(buttonId).addEventListener("click",function(){
               let titleName=document.getElementById(title).innerHTML;
               let artistName=document.getElementById(artist).innerText;
    
                fetch("https://api.lyrics.ovh/v1/"+artistName+"/"+titleName+"") 
                .then(lyrics=>lyrics.json())
                .then(data1=>{
                    let result=data1.lyrics;
                    if(typeof result =="undefined"){
                        document.getElementById("songTitle").innerText=titleName;
                        document.getElementById("lyrics").innerText=" Lyrics is Not Found"
                    }
                    else
              {
                  document.getElementById("songTitle").innerText=titleName;
              document.getElementById("lyrics").innerText=result;}
              document.getElementById("lyricsSection").style.display="block";
                })
            })
        }
        lyricsBtn("getLyricsBtn1","titleId1","artistId1")
        lyricsBtn("getLyricsBtn2","titleId2","artistId2")
        lyricsBtn("getLyricsBtn3","titleId3","artistId3")
        lyricsBtn("getLyricsBtn4","titleId4","artistId4")
        lyricsBtn("getLyricsBtn5","titleId5","artistId5")
        lyricsBtn("getLyricsBtn6","titleId6","artistId6")
        lyricsBtn("getLyricsBtn7","titleId7","artistId7")
        lyricsBtn("getLyricsBtn8","titleId8","artistId8")
        lyricsBtn("getLyricsBtn9","titleId9","artistId9")
        lyricsBtn("getLyricsBtn10","titleId10","artistId10")
        //  document.getElementById("getLyricsBtn").addEventListener("click",function(){
        //     document.getElementById("songTitle").innerText= data.data[i].album.title;
        //     document.getElementById("lyrics").innerText=lyrics;
        //     document.getElementById("lyricsSection").style.display="block";
            
        //  })
        
            
       
       
    }
    console.log(data.data)  
    // document.getElementById("title1").innerText=data.data[0].album.title;
    // document.getElementById("artistName1").innerText=data.data[0].artist.name;
    // console.log(data.data)
   
}) 
})
