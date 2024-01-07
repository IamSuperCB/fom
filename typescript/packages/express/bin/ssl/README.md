# Create Self signed Sertificate

GitHub Copilot: To create a self-signed SSL certificate in Ubuntu, you can use the `openssl` command-line tool. Here are the steps:

1. Open a terminal window.
2. Run the following command to generate a private key:

   ```
   openssl genrsa -out key.pem 2048
   ```

   This will generate a 2048-bit RSA private key and save it to a file named `key.pem`.

3. Run the following command to generate a certificate signing request (CSR):

   ```
   openssl req -new -key key.pem -out csr.pem
   ```

   This will generate a CSR and save it to a file named `csr.pem`. You will be prompted to enter some information, such as your name and organization.

4. Run the following command to generate a self-signed certificate:

   ```
   openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
   ```

   This will generate a self-signed certificate and save it to a file named `cert.pem`. The certificate will be valid for 365 days.

5. You can now use the `key.pem` and `cert.pem` files in your Express.js app to enable HTTPS.

Note that self-signed certificates are not trusted by default, so you may see a warning in your browser when you try to access your app over HTTPS. If you want to use a trusted certificate, you will need to obtain one from a certificate authority (CA).
