import Header from '@/components/Header/Header';
import Footer from '@/components/PostAd/sub/Footer';
import '../styles/postAd.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-96">
        <h1 className="AutoBerza Home"></h1>
        <Link href="/search-page">Advance Search Ads here</Link>
      </div>
      <Footer />
    </main>
  );
}
