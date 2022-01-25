import { Button } from "ui";
import {
  useGetUserQuery,
  useCreateUserMutation,
  usePatchUserMutation,
  useDeleteUserMutation,
} from "../api/user";
import { useState, useEffect } from "react";

export default function Docs() {
  const { data, error, isLoading } = useGetUserQuery();
  const [createUser] = useCreateUserMutation();
  const [patchUser] = usePatchUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [name, setName] = useState("");
  const [customData, setCustomData] = useState(data);

  useEffect(() => {
    setCustomData(data);
  }, [data]);

  if (isLoading || !data) return <></>;

  const addUser = () => {
    createUser({ id: data.length + 1, name });
  };

  const editUser = (id: number, name: string) => {
    patchUser({ id, name });
  };

  const removeUser = (id: number) => {
    deleteUser(id);
  };

  const editInputName = (id: number, name: string) => {
    const editCustomData = customData?.map((d, index) => {
      if (index !== id - 1) {
        return d;
      }
      return {
        ...d,
        name,
      };
    });
    setCustomData(editCustomData);
  };

  return (
    <div>
      <div>학생 목록</div>
      {customData?.map((d) => {
        return (
          <div key={d.id} style={{ display: "flex" }}>
            <div>{d.id}</div>
            <input
              type="text"
              value={d.name}
              onChange={(e) => editInputName(d.id, e.target.value)}
            />
            <Button onClick={() => editUser(d.id, d.name)} text="수정" />
            <Button onClick={() => removeUser(d.id)} text="삭제" />
          </div>
        );
      })}
      <label>
        이름:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <Button onClick={addUser} text="학생등록" />
    </div>
  );
}
