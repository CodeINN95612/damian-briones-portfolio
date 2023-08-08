import styles from "./FooterLink.module.css";

export type FooterLinkProps = {
  name: string;
  targetRef: React.RefObject<HTMLElement>;
};

function FooterLink({ name, targetRef }: FooterLinkProps) {
  function handleClick() {
    targetRef.current!.scrollIntoView({ behavior: "smooth" });
  }

  return <a onClick={handleClick}>{name}</a>;
}

export default FooterLink;
