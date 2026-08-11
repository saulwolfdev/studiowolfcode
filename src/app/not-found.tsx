import Link from "next/link";

export default function NotFound() {
  return <main className="case-study"><section className="case-hero"><p className="case-kicker">404 / Not found</p><h1>Lost in the interface.</h1><p className="case-summary">The page you requested does not exist or has moved.</p><Link className="button primary" href="/">Return home</Link></section></main>;
}
