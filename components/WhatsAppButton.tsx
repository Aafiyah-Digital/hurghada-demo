export default function WhatsAppButton() {
  const phone = "201080609297"; 
  const message = encodeURIComponent(
    "Hi! I'd like to book an excursion in Hurghada.",
  );

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
    >
      {/* ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-5 h-5 fill-white"
      >
        <path d="M16 .4C7.3.4.4 7.3.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.3 4.9 2 7.7 2 8.7 0 15.6-6.9 15.6-15.6S24.7.4 16 .4zm0 28.5c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2-2-4.3-2-6.8 0-7 5.7-12.7 12.7-12.7S28.7 9 28.7 16 23 28.9 16 28.9zm7.2-9.7c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.7-.2-1 .2s-1.1 1.3-1.3 1.6c-.2.2-.5.3-.9.1s-1.7-.6-3.2-2c-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7s-1-2.5-1.4-3.4c-.4-.9-.8-.7-1-.7h-.9c-.3 0-.7.1-1 .5s-1.4 1.3-1.4 3.2 1.5 3.8 1.7 4.1c.2.3 3 4.7 7.2 6.6 1 .4 1.8.7 2.4.9 1 .3 1.9.2 2.6.1.8-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z" />
      </svg>

      <span className="font-semibold">Chat on WhatsApp</span>
    </a>
  );
}
