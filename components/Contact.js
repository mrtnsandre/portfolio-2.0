import Image from 'next/image';
import { contact } from '@/data/config';

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {contact.title}
        </h2>
      </div>
      <p>
        Mande me um email:{' '}
        <a
          className="dark:text-white text-black transition-colors duration-500"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
      </p>
      <p>
        Baixe minha apresentação,{' '}
        <a
          className="dark:text-white text-black transition-colors duration-500"
          href="/static/presentation.pdf"
          download="presentation.pdf"
        >
          Clique aqui.
        </a>
      </p>
      <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500">
        {contact.github && (
          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/github.svg"
              width={20}
              height={20}
              alt="Github icon"
            />
          </a>
        )}
        {contact.linkedin && (
          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/linkedin.svg"
              width={20}
              height={20}
              alt="LinkedIn icon"
            />
          </a>
        )}
      </div>
    </div>
  );
}
