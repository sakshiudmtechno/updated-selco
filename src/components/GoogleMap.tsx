const GoogleMap = () => {
  return (
    <section className="w-full">
      <iframe
        title="SELCO Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2!2d75.85!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEyLjAiTiA3NcKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </section>
  );
};

export default GoogleMap;
