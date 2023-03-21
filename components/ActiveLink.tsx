import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

interface Props {
  text: string;
  href: string;
}

export default function ActiveLink({text, href}: Props) {

  const {pathname} = useRouter();

  return ( 
    <Link style={ pathname === href ? style : undefined} href={href}>{text}</Link>
  );
}