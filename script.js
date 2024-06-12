const assistant = {
    serviceSelect: document.getElementById('service'),
    formFieldsContainer: document.getElementById('form-fields'),
    welcomeLetterContainer: document.getElementById('welcome-letter'),
  
    init() {
      this.serviceSelect.addEventListener('change', () => {
        // Clear the existing form fields and welcome letter
        this.formFieldsContainer.innerHTML = '';
        this.welcomeLetterContainer.innerHTML = '';
  
        // Create new form fields and welcome letter based on the selected service
        switch (this.serviceSelect.value) {
          case 'service1':
            this.createServiceOneFields();
            this.displayWelcomeLetterForService1();
            break;
          case 'service2':
            this.createServiceTwoFields();  
            this.displayWelcomeLetterForService2();
            break;
          default:
            // No service selected, do nothing
            break;
        }
      });
    },
  
    createServiceOneFields() {
      // Create input fields for 'company name' and 'Service No.'
      const companyNameInput = this.createInputField('text', 'Company Name');
      const serviceNoInput = this.createInputField('text', 'Service No.');
  
      this.formFieldsContainer.appendChild(companyNameInput);
      this.formFieldsContainer.appendChild(serviceNoInput);
    },
  
    createServiceTwoFields() {
      // Create input fields for 'customer name' and 'aws number'
      const customerNameInput = this.createInputField('text', 'Customer Name');
      const awsNumberInput = this.createInputField('text', 'AWS Number');
  
      this.formFieldsContainer.appendChild(customerNameInput);
      this.formFieldsContainer.appendChild(awsNumberInput);
    },
  
    createInputField(type, placeholder) {
      const inputField = document.createElement('input');
      inputField.type = type;
      inputField.placeholder = placeholder;
      return inputField;
    },
  
    displayWelcomeLetterForService1() {
      const welcomeLetter = this.generateWelcomeLetterForService1();
      this.welcomeLetterContainer.innerHTML = welcomeLetter;
      this.applyStylesToServiceDetails(this.welcomeLetterContainer);
    },
  
    displayWelcomeLetterForService2() {
      const welcomeLetter = this.generateWelcomeLetterForService2();
      this.welcomeLetterContainer.innerHTML = welcomeLetter;
    },
  
    generateWelcomeLetterForService1() {
      return `
        <h2>Welcome to HKT Multi-Cloud Service</h2>
        <p>Dear Valued Customer,</p>
        <p>We are writing to express our gratitude for your HKT Multi-Cloud subscription and welcome you onboard as a new customer.</p>
        <p>Details of the service are as follows:</p>
        <div class="service-details">
          <div class="detail-row">
            <span class="label">Customer Name:</span>
            <span>FANO LABS LIMITED</span>
          </div>
          <div class="detail-row">
            <span class="label">Subscribed Service:</span>
            <span>Multi-Cloud Service – Amazon Web Services (AWS)</span>
          </div>
          <div class="detail-row">
            <span class="label">Detail:</span>
            <span>Please ref. to the attachment</span>
          </div>
        </div>
        <p>Consolidated Billing Portal:<br>
        URL: https://app-au.cloudcheckr.com/<br>
        Login ID: aws@fano.ai<br>
        Password: Setup by customer after receiving the activation email</p>
        <p>Should you have any inquiries, please call our Customer Service Hotlines 2283-6880 or by email hktcloudems@pccw.com</p>
        <p>Thank you for choosing HKT as your service provider.</p>
        <p>Yours sincerely,<br>
        HKT Multi-Cloud service</p>
        <p>***This is a system generated email, please do not reply to this mail***</p>
        <p>This message (and any attachments) may contain information that is confidential, proprietary, privileged or otherwise protected by law. The message is intended solely for the named addressee (or a person responsible for delivering it to the addressee). If you are not the intended recipient of this message, you are not authorized to read, print, retain, copy or disseminate this message or any part of it. If you have received this message in error, please destroy the message or delete it from your system immediately and notify the sender.</p>
        <p>本郵件(及任何附件)可能載有機密、專有、具有特權或受法律保護的資料，並僅供收件人(或負責將資料遞交給收件人的人士)使用。如閣下不是本郵件的預定收件人，便無權閱讀、列印、保留、複製或傳佈本郵件或其任何部分。如閣下錯誤地收到本郵件，請立即將之銷毀或從閣下的系統中刪除，並通知寄件人</p>
      `;
    },
  
    generateWelcomeLetterForService2() {
      return `
        <h2>Welcome to HKT Multi-Cloud Service2</h2>
        <p>Thank You choose HKT.</p>
      `;
    },
  
    applyStylesToServiceDetails(container) {
      const serviceDetailsContainer = container.querySelector('.service-details');
      serviceDetailsContainer.style.display = 'flex';
      serviceDetailsContainer.style.flexDirection = 'column';
  
      const detailRows = serviceDetailsContainer.querySelectorAll('.detail-row');
      detailRows.forEach((row) => {
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.marginBottom = '8px';
      });
  
      const labels = serviceDetailsContainer.querySelectorAll('.label');
      labels.forEach((label) => {
        label.style.fontWeight = 'bold';
        label.style.marginRight = '16px';
      });
    }
  };
  const path = require('path'); // 確保導入 'path' 模塊
  const generatePDF = require('./pdfGenerator');
  const sendEmail = require('./emailSender');
  
  async function main() {
    // Generate the PDF
    const html = '<h1>Hello, PDF!</h1><p>This is a test PDF.</p>';
    const pdfPath = path.join(__dirname, 'document.pdf');
    await generatePDF(html, pdfPath);
  
    // Send the email
    const subject = 'Email with PDF Attachment';
    const text = 'Please find the attached PDF document.';
    await sendEmail(subject, text, pdfPath);
  }
  
  main();

function generateWelcomePdf(customerData) {
  const welcomeLetter = `
Dear Valued Customer,

We are writing to express our gratitude for your HKT Multi-Cloud subscription and welcome you
onboard as a new customer.

Details of the service are as follows:
Customer Name: ${customerData.customerName}
Service No.: ${customerData.serviceNo}
Tenant ID: ${customerData.tenantId}
Subscribed Service: ${customerData.subscribedService}
AWS Account ID: ${customerData.awsAccountId}
Consolidated Billing Portal:
URL: ${customerData.billingPortalUrl}
Login ID: ${customerData.billingPortalLogin}
Password: Setup by customer after receiving the activation email

***This is a system generated email, please do not reply to this mail***
This message (and any attachments) may contain information that is confidential, proprietary, privileged or otherwise protected by law.
The message is intended solely for the named addressee (or a person responsible for delivering it to the addressee). If you are not the
intended recipient of this message, you are not authorized to read, print, retain, copy or disseminate this message or any part of it. If you
have received this message in error, please destroy the message or delete it from your system immediately and notify the sender.

Yours sincerely,
HKT Multi-Cloud service
`;

  // Generate the PDF
  return createPdf(welcomeLetter);
}

app.post('/generate-letter', async (req, res) => {
  const customerData = {
    customerName: 'FANO LABS LIMITED',
    serviceNo: 'CL544959',
    tenantId: '103836',
    subscribedService: 'Multi-Cloud Service – Amazon Web Services (AWS)',
    awsAccountId: '339713130246',
    billingPortalUrl: 'https://app-au.cloudcheckr.com/',
    billingPortalLogin: 'aws@fano.ai',
  };

  try {
    // Generate the PDF
    const pdfBuffer = await generateWelcomePdf(customerData);

    // Send the email with the PDF attachment
    await sendEmail(customerData.customerName, pdfBuffer);

    // Return the welcome letter
    res.json({ letter: welcomeLetter });
  } catch (error) {
    console.error('Error generating welcome letter:', error);
    return res.status(500).json({ error: 'Failed to generate the welcome letter' });
  }
});
  
  assistant.init();