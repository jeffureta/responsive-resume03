function generatePDF() {
    
    const element = document.getElementsByClassName("container")[0];

    html2pdf().from(element).save();
    // console.log(element);
}