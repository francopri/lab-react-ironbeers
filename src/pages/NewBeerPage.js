
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import Header from "../components/Header";

function NewBeerPage() {

  const emptyForm = {
    name: "",
    tagline: "",
    description: "",
    firstBrewed: "",
    brewersTips: "",
    attLvl: "",
    contr: "",
  };

  const [form, setForm] = useState(emptyForm);

  function handleChange(e) {
    
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  async function handleSubmit(e) {

    e.preventDefault();

    const newBeer = {
      name: form.name,
      tagline: form.tagline,
      description: form.description,
      first_brewed: form.firstBrewed,
      brewers_tips: form.brewersTips,
      attenuation_level: form.attLvl,
      contributed_by: form.contr,
    };

    await axios.post("https://ironbeer-api.fly.dev/new", newBeer);
    // console.log(newBeer);

    setForm(emptyForm);

    toast.success("Beer created successfully! :D");

  }

  return (
    <div>

      <Header />

      <form>
        <div className="container ps-5 pe-5 ">

          <div className="mb-3">
            <label className="col-form-label-sm fw-bold" htmlFor="name">Name</label>
            <input type="text" className="form-control form-control-sm" id="name" name="name" onChange={handleChange} value={form.name} />
          </div>

          <div className="mb-3">
            <label className="col-form-label-sm fw-bold" htmlFor="tagline">Tagline</label>
            <input type="text" className="form-control form-control-sm" id="tagline" name="tagline" onChange={handleChange} value={form.tagline} />
          </div>

          <div className="mb-3">
            <label className="col-form-label-sm fw-bold" htmlFor="description">Description</label>
            <textarea className="form-control form-control-sm" rows={6} id="description" name="description" onChange={handleChange} value={form.description}></textarea>
          </div>

          <div className="mb-3">
            <label className="col-form-label-sm fw-bold" htmlFor="firstBrewed">First Brewed</label>
            <input type="text" className="form-control form-control-sm" id="firstBrewed" name="firstBrewed" onChange={handleChange} value={form.firstBrewed} />
          </div>

          <div className="mb-3">
            <label className="col-form-label-sm fw-bold" htmlFor="brewersTips">Brewers Tips</label>
            <input type="text" className="form-control form-control-sm" id="brewersTips" name="brewersTips" onChange={handleChange} value={form.brewersTips} />
          </div>

          <div className="mb-3">
            <label className="col-form-label-sm fw-bold" htmlFor="attLvl">Attenuation Level</label>
            <input type="number" className="form-control form-control-sm" id="attLvl" name="attLvl" onChange={handleChange} value={form.attLvl} placeholder="insert a number" min="0"/>
          </div>

          <div className="mb-3">
            <label className="col-form-label-sm fw-bold" htmlFor="contr">Contributed By</label>
            <input type="text" className="form-control form-control-sm" id="contr" name="contr" onChange={handleChange} value={form.contr} />
          </div>

          <div className="d-grid gap-2 pt-3 pb-3">
            <button onClick={handleSubmit} className="btn btn-secondary">Add New Beer</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default NewBeerPage;
