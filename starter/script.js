document.getElementById("info-btn").addEventListener("click", () => {
    alert("JS effect working!");
});
const nameHeader = document.getElementById('name');
const actionButton = document.getElementById('info-btn');
if (actionButton) {
    actionButton.addEventListener('click', function() {
        nameHeader.classList.toggle('rainbow-mode');
        
        console.log("Rainbow mode toggled!");
   });
}


    
    
    


