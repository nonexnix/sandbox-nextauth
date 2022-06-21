import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const session = await getSession({ req: request });

  if (!session) {
    response.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }

  response.send(session);
};

export default handler;
