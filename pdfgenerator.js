const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

class PdfGenerator {
  async generatePdf(htmlContent, outputPath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
    });
    await browser.close();
  }
}

module.exports = PdfGenerator;