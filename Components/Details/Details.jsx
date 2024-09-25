import HouseIcon from "@/Components/HouseIcon/HouseIcon";
import EmailIcon from "@/Components/EmailIcon/EmailIcon";
import PhoneIcon from "@/Components/PhoneIcon/PhoneIcon";

export default function Details({ data }) {
  return (
    <div className="pt-2 font-bold">
      {data && (
        <>
          <div className="flex  mb-2">
            {data.adresa && <HouseIcon link={data.website} />}
            {data.adresa && data.adresa}
          </div>

          <div className="flex">
            {data.email && <EmailIcon link={data.website} />}
            {data.email && data.email}
          </div>

          <div className="flex mt-2">
            {data.phone && <PhoneIcon link={data.website} />}
            {data.phone && data.phone}
          </div>
        </>
      )}
    </div>
  );
}
