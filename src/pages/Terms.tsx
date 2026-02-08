import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold font-serif mb-8 animate-slide-down">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-8 animate-slide-up stagger-1">
          <p className="text-lg text-muted-foreground">
            Last updated: January 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold font-serif mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using <span className="font-neoda">CodeCraft</span>, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif mb-4">2. Use of Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <span className="font-neoda">CodeCraft</span> provides free online coding education. You may use our services for personal, 
              non-commercial learning purposes. You agree not to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Share your account credentials with others</li>
              <li>Attempt to access other users' accounts</li>
              <li>Reproduce or redistribute our course content without permission</li>
              <li>Use automated tools to scrape or collect content</li>
              <li>Engage in any activity that disrupts our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif mb-4">3. Account Registration</h2>
            <p className="text-muted-foreground leading-relaxed">
              To access certain features, you must create an account. You are responsible for 
              maintaining the confidentiality of your account and password. You agree to provide 
              accurate and complete information during registration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on <span className="font-neoda">CodeCraft</span>, including courses, lessons, and certificates, is protected 
              by copyright and other intellectual property laws. You may not copy, modify, or 
              distribute our content without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif mb-4">5. Certifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              Certifications are issued based on completion of required courses. We reserve the 
              right to revoke certifications if we determine they were obtained through fraudulent 
              means or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif mb-4">6. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-neoda">CodeCraft</span> is provided "as is" without warranties of any kind. While we strive to 
              provide accurate and up-to-date content, we make no guarantees about the completeness 
              or accuracy of our materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif mb-4">7. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these terms from time to time. We will notify users of significant 
              changes via email or through our platform. Continued use of our services after 
              changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif mb-4">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@codecraft.dev" className="text-accent hover:underline">
                legal@codecraft.dev
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
