import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-32 p-20 ${inter.className}`}
    >
      <div className="text-center flex flex-col gap-16">
        <h1 className="text-3xl">Hi I'm Eoin, nice to meet you!</h1>
        <div>
          I'm a Software Engineer, Globetrotter and Photographer from 🇮🇪
        </div>
        <div>
          I'm currently working as a Product Engineer in{" "}
          <a href="https://evervault.com" className="text-purple-900">Evervault</a> building privacy-first
          developer tools in Rust.
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-sm font-light border-b border-grey-900">
          Get in touch
        </h1>
        <ul className="flex gap-2">
          <li>
            <a
              className="flex flex-row gap-1"
              href="https://github.com/e-moran"
            >
              <Image
                src="/logo-github.svg"
                width={20}
                height={20}
                alt="Github logo"
                className="stone-100"
              />{" "}
              GitHub
            </a>
          </li>
          <li>
            <a
              className="flex flex-row gap-1"
              href="https://twitter.com/e_power_moran"
            >
              <Image
                src="/logo-twitter.svg"
                width={20}
                height={20}
                alt="Twitter logo"
                className="stone-100"
              />
              Twitter
            </a>
          </li>
          <li>
            <a
              className="flex flex-row gap-1"
              href="https://www.linkedin.com/in/eoin-power-moran-4259331b1/"
            >
              <Image
                src="/logo-linkedin.svg"
                width={20}
                height={20}
                alt="LinkedIn logo"
                className="stone-100"
              />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="flex flex-row gap-1"
              href="mailto:hello@eoinmoran.com"
            >
              <Image
                src="/mail-sharp.svg"
                width={20}
                height={20}
                alt="Mail icon"
                className="stone-100"
              />
              Email
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
