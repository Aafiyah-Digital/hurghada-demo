export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg z-50 font-semibold"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="20"
        height="20"
        fill="white"
      >
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.4c2.3 1.3 4.9 2 7.7 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.4 0-4.8-.6-6.9-1.9l-.5-.3-4.9 1.4 1.5-4.8-.3-.5c-1.3-2.1-2-4.5-2-6.9 0-7.2 5.9-13.1 13.1-13.1S29.1 8.8 29.1 16 23.2 28.9 16 28.9zm7.2-9.9c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.7.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.3.3-.5.4-.8.1-.3 0-.6 0-.8 0-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.8.1-1.2.6s-1.6 1.6-1.6 3.8 1.6 4.4 1.8 4.7c.2.3 3.1 4.7 7.6 6.6 1.1.5 1.9.7 2.6.9 1.1.3 2 .3 2.8.2.9-.1 2.7-1.1 3.1-2.2.4-1.1.4-2 .3-2.2-.1-.2-.3-.3-.7-.5z" />
      </svg>
      Chat on WhatsApp
    </a>
  );
}
