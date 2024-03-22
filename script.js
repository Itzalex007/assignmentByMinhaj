const buttons = document.querySelectorAll('.button');
const detailsBox = document.getElementById('detailsBox');

buttons.forEach(button => {
  button.addEventListener('mouseover', (event) => {
    const details = button.getAttribute('data-details').split('|'); 
    let detailsHTML = '';

    details.forEach(detail => {
      detailsHTML += `<p>${detail}</p>`; 
    });

    detailsBox.innerHTML = detailsHTML;


    const offsetX = 10; 
    const offsetY = 10; 

   
    const mouseX = event.clientX;
    const mouseY = event.clientY;

   
    detailsBox.style.display = 'block';
    detailsBox.style.left = `${mouseX + offsetX}px`;
    detailsBox.style.top = `${mouseY + offsetY}px`;
  });

  button.addEventListener('mouseout', () => {
    detailsBox.style.display = 'none';
  });
});
