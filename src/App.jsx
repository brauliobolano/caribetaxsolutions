function App() {
  return (
    <main>
      {/* CALL TO ACTION (CTA) SECTION */}
      <section className="section-cta" id="cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-tertiary text-center">
                Caribe Tax Solutions
              </h2>
              <p className="cta-text text-center">
                Este sitio está bajo construcción 👷‍♂️. Contáctenos hoy.
              </p>
              <form
                name="contact-form"
                className="cta-form"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <p className="hidden">
                  <label>
                    Do not fill this out if you are human:
                    <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label htmlFor="full-name">Nombre *</label>
                  <input
                    type="text"
                    required
                    id="full-name"
                    name="full-name"
                    placeholder="Juan Perez"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    placeholder="juan@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone">Teléfono*</label>
                  <input
                    type="tel"
                    required
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="state">Estado *</label>
                  <select id="state" name="state" required>
                    <option value="">Seleccione...</option>
                    <option value="NY">New York</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>

                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>

                <div>
                  <fieldset>
                    <legend>Estoy interesado en *</legend>

                    <div className="grid--checkbox">
                      <input type="checkbox" id="taxes" name="taxes" />
                      <label htmlFor="taxes">Taxes</label>
                    </div>
                    <div className="grid--checkbox">
                      <input
                        type="checkbox"
                        id="translation"
                        name="translation"
                      />
                      <label htmlFor="translation">Traducción</label>
                    </div>
                    <div className="grid--checkbox">
                      <input
                        type="checkbox"
                        id="inmigration"
                        name="inmigration"
                      />
                      <label htmlFor="inmigration">Tramite migratorio</label>
                    </div>
                    <div className="grid--checkbox">
                      <input type="checkbox" id="other" name="other" />
                      <label htmlFor="other">Otro servicio</label>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <label htmlFor="comment">Comentario</label>
                  <textarea
                    name="comment"
                    id="comment"
                    cols="50"
                    rows="5"
                  ></textarea>
                </div>
                <button className="btn btn--form">Enviar</button>
              </form>
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="Image of man drawing a blueprint"
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
