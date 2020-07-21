
 function Bfunc(bid,bvalue)
        {
           
            document.getElementById("msgformsent").innerHTML="Formed Sentence <span>(after selecting wd):</span>";
            document.getElementById("selectedwd").innerHTML +=bvalue+" ";
            document.getElementById(bid).style.display="none";
            document.getElementById("reformButton").innerHTML = "<button class='reform' id='' onclick='ref()'> Re-form the sentence</button>";
            cout++;
           
            if(WdCount==cout && WdCount>0)
            {
                selectedSentence = document.getElementById("selectedwd").innerHTML;
                document.getElementById("check-crctness").innerHTML="<button id='check' onclick='chk()'>Check Correctness of the Sentence</button>";                
                console.log(selectedSentence);
            }
            else{
                document.getElementById("check-crctness").innerHTML="";  
            }
