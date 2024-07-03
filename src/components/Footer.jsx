import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src="https://d3kanykijpjn5y.cloudfront.net/cd065bdf9a5b220fd8c0b508d256a0d8.png"
        alt="image"
        className="img3"
      />

      <div> Rooftop | Live Music | Comedy Club | Takeaway </div>
      <h2>Timings</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>12:00 PM - 1:00 AM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>12:00 PM - 1:00 AM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>12:00 PM - 1:00 AM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>12:00 PM - 1:00 AM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>12:00 PM - 1:00 AM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>12:00 PM - 1:00 AM</td>
          </tr>
        </tbody>
      </table>

      <h1>Contact Us</h1>

      <h3>cafe27@gmail.com</h3>
      <h3>Whatsapp: +91 9036951259</h3>
    </div>
  );
};

export default Footer;
