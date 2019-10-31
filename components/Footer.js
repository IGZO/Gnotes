import Link from 'next/link';

const linkStyle = {
  
};

const Footer = () => (
    <footer class="footer">
    <div class="container-fluid">
      <nav class="float-left">
        <ul>
          <li>
            <a href="">
              Gnotes
            </a>
          </li>
          <li>
            <a href="">
              About Us
            </a>
          </li>
          <li>
            <a href="">
              Blog
            </a>
          </li>
          <li>
            <a href="">
              Licenses
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright float-right">
        &copy;
        <script>
          document.write(new Date().getFullYear())
        </script>, made with <i class="material-icons">favorite</i> by
        <a href="" target="_blank">BDIO</a> for a better ENSAM.
      </div>
    </div>
  </footer>
);

export default Footer;