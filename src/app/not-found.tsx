import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="section is-medium">
      <div className="level">
        <div className="level-item has-text-centered">
          <div>
            <div className="block">
              <p className="heading">Page Not Found</p>
              <p className="title">404</p>
            </div>
            <div className="block">
              <Link href="/" className="button is-primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
