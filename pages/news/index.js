import { Row } from "react-bootstrap";
import NewsTab from "../../components/NewsTab";

export default function Index() {
  return (
    <>
      <Row lg={4} sm={1} className="pt-6 ">

        <NewsTab
          link="gimme-loot"
          headLine="Gimme Loot Out Now"
          date="August 11, 2022"
          spotifyTrackID="2KeqRslwPKHlyfbtTXjsX1"
          deezer="https://www.deezer.com/us/album/343200227"
          amazon="https://music.amazon.com/albums/B0B8C5PBQX?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_HnlGxfjCBk0qxyIrbnTCzaEWC"
          apple="https://music.apple.com/us/album/gimme-loot-single/1638622444?uo=4"
          pandora="https://www.pandora.com/artist/tommy-basham/gimme-loot-single/AL6nfjK7qn9cvbZ?%24ios_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A17492838&%24android_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A17492838&~channel=Partner%20Catalog%20Search%20API&_branch_match_id=1088496109366142185&utm_source=Partner%20Catalog%20Search%20API&_branch_referrer=H4sIAAAAAAAAA62Py2rDMBBFv0bZGNvUNnFSMMU0KYRkEeiuGzOWp5ZqvSpNYvr3laDtFxRmMVzunMMIIhcey9KBmayHApwrlDRL%2BcSqZsKwkHXDzatOpCKre1a9xFnXtfg94VbHBDzJQHEhq%2FVXPkIQkPJZao25spbyIM2sMGb9ZWveP87tp9nz%2B%2Fi2iSppwzAhuuQeHJDofvD35k86Al8CwZwQoMabZnW0LWhYfegvsfbQNvtqV%2B8SMF57K6f%2FhLZHLsAYVN01fmvQZ89AoOycvSJ4LrL%2BevoGJWsi01ABAAA%3D"
          />
        
        <NewsTab
          link="fumes"
          headLine="Fumes Out Now"
          date="February 3, 2022"
          spotifyTrackID="1jvs3FyXkbMya4jSJYJYge"
          deezer="https://www.deezer.com/us/album/290466652"
          amazon="https://music.amazon.com/albums/B09R2MMGDW"
          apple="https://music.apple.com/us/album/fumes-single/1606804360?uo=4"
          pandora="https://www.pandora.com/artist/tommy-basham/fumes-single/ALtz2J4PfnK9mf9"
          />
        
        <NewsTab
          link="lonely-me"
          headLine="Lonely Me Out Now"
          date="January 7, 2022"
          spotifyTrackID="0UJTi2a46HRnFD8wGFYjil"
          apple="https://music.apple.com/us/album/lonely-me-single/1603526055?uo=4"
          amazon="https://music.amazon.com/albums/B09PTBL81N?tag=fndcmpgns-20"
          pandora="https://www.pandora.com/artist/tommy-basham/lonely-me-single/ALhzxdqqc5XXkJP"
          deezer="https://www.deezer.com/us/album/285645392"
        />
      </Row>
    </>
  );
}

