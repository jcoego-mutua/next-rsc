//Can´t use 'use client' here, given it is a third party library.

const LinkTraker = ({ href, children }: any) => {
  const handleClickTrack = () => {
    alert("Tracker event sent.");
  };

  return (
    <a onClick={handleClickTrack} href={href}>
      {children}
    </a>
  );
};

export default LinkTraker;
