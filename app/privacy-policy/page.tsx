export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect information that you provide directly to us when using our OG Image Generator service:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Images and text you upload or input</li>
          <li>Usage data and preferences</li>
          <li>Technical information about your device and browser</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the collected information to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and improve our service</li>
          <li>Generate OG images as requested</li>
          <li>Analyze usage patterns to enhance user experience</li>
          <li>Display relevant advertisements</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking</h2>
        <p className="mb-4">We use cookies and similar tracking technologies to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Remember your preferences</li>
          <li>Analyze site usage</li>
          <li>Personalize advertisements</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
        <p className="mb-4">We work with trusted third-party services:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Google Analytics for usage analysis</li>
          <li>Google AdSense for advertisement display</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal data</li>
          <li>Request data deletion</li>
          <li>Opt-out of cookies</li>
          <li>Object to data processing</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
        <p className="mb-4">Email: support@ogimage.top</p>
      </section>

      <footer className="text-sm text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}
