import { useRouter } from 'next/router';

export default function BreadCrumb(props) {
  const { title } = props;
  const router = useRouter();

  return (
    <>
      <Link href="/">
        <a className="red-title proxima-bold h6">
          HOME
        </a>
      </Link>
      <strong className="text-black mt-2 mx-2 proxima-bold">
        <FontAwesomeIcon icon={faCaretRight} className="red-title mw-6" />
      </strong> 
      <Link href="/careers">
        <a className="red-title proxima-bold">
          CAREERS
        </a>
      </Link> 
      <strong className="text-black mt-2 mx-2 proxima-bold">
        <FontAwesomeIcon icon={faCaretRight} className="red-title mw-6" />
      </strong>
      <Link href="/career/[slug]" as={router.asPath}>
        <a className="red-title proxima-bold text-uppercase">
          {title}
        </a>
      </Link>        
    </>    
  );
}