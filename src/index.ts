interface MyType {
  id: string;
  name: string;
}

function doAlertTs() {
  const t: MyType = {
    id: "x",
    name: "y",
  };

  alert(t.id);
}
