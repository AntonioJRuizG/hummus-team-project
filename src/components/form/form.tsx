
import {
  CharacterStructure,
  ProtoCharacterStructure,
} from "../../models/character/character";
import "./form.scss";


export function Form({
  char,
  onSubmit,
}: {
  char: CharacterStructure | ProtoCharacterStructure | null;
  onSubmit: any;
}) {
  // const { updateChar, addChar } = useContext(AppContextPrivate);

  char === null &&
    (char = {
      image: "",
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
      location: "",
      isFavourite: true,
    } as ProtoCharacterStructure);

  return (
    <form action="" id="form" data-testid="form">
      <div className="form-line">
        <label htmlFor="">Image url: </label>
        <input
          type="text"
          placeholder="https://www.example.png"
          defaultValue={char.image}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Name: </label>
        <input
          type="text"
          placeholder="Rick"
          defaultValue={char.name}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Status: </label>
        <input
          type="text"
          placeholder="alive"
          defaultValue={char.status}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Species: </label>
        <input
          type="text"
          placeholder="human"
          defaultValue={char.species}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Type: </label>
        <input type="text" placeholder="-" defaultValue={char.type} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Gender: </label>
        <input
          type="text"
          placeholder="male"
          defaultValue={char.gender}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Location: </label>
        <input
          type="text"
          placeholder="earth"
          defaultValue={char.location}
          required
        />
      </div>
      <div className="button-div">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
}
