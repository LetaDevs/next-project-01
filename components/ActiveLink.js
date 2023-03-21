import { useRouter } from "next/router";
import Link from "next/link";

const style = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export default function ActiveLink({text, href}) {

  const {pathname} = useRouter();

  return ( 
    <Link style={ pathname === href ? style : {}} href={href}>{text}</Link>
  );
}