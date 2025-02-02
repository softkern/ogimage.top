export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing and using OG Image Generator (ogimage.top), you accept and agree to be bound by the terms and provision of this agreement.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
        <p className="mb-4">OG Image Generator provides tools for creating Open Graph images for social media platforms. We reserve the right to modify or discontinue the service at any time.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
        <p className="mb-4">You agree not to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Use the service for any unlawful purpose</li>
          <li>Upload any content that infringes on intellectual property rights</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Use the service to generate inappropriate or harmful content</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
        <p className="mb-4">The service and its original content, features, and functionality are owned by OG Image Generator and are protected by international copyright, trademark, and other intellectual property laws.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p className="mb-4">OG Image Generator shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
        <p className="mb-4">We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the bottom of this page.</p>
      </section>

      <footer className="text-sm text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}
