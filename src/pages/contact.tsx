import React from "react";
import { Layout } from "../templates/layout";
import * as Vanilla from "./contact.css";

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <div className={Vanilla.SectionsWrapper}>
        <div className={Vanilla.Section}>
          <h2 className={Vanilla.h2}>作品の感想を送りたい</h2>
          <div className={Vanilla.Separator} />
        </div>
        <div className={Vanilla.Section}>
          <h2 className={Vanilla.h2}>ちょっとした依頼を出したい</h2>
          <div className={Vanilla.Separator} />
        </div>
        <div className={Vanilla.Section}>
          <h2 className={Vanilla.h2}>しっかりした依頼を出したい</h2>
          <div className={Vanilla.Separator} />
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
