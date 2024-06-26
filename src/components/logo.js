/** @jsxImportSource theme-ui */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/Lookuptax-logo.png';
import logoWhite from 'assets/images/Lookuptax-logo.png';

export default function Logo({ isWhite }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={isWhite ? logoWhite : logo} alt="Lookuptax logo" />
    </Link>
  );
}
