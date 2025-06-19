import { RequestInfo } from "rwsdk/worker";
import { TestClient } from "./client";
import { ServerCounter } from "./server";

export function Home({ ctx }: RequestInfo) {
  return (
    <div>
      <h1>Hello World</h1>
      <TestClient />
      <ServerCounter />
    </div>
  );
}
