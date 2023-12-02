import { navigations } from './constants';

export default function Home() {
  return (
    <div>
      <header>
        <div>logo</div>

        <nav>
          <ul>
            {navigations.map((nav) => (
              <li>{nav}</li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
