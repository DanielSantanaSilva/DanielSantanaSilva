import React from 'react';
import styles from '../styles/Home.module.css';

const Registration = () => {
    return (
        <section className={styles.registration}>
            <div className={styles.container}>
                <form>
                    <div>
                        <label htmlFor="schoolName">Nome da sua escola:</label>
                        <input type="text" id="schoolName" name="schoolName" required />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required />
                    </div>
                    <div>
                        <label htmlFor="rg">RG:</label>
                        <input type="text" id="rg" name="rg" required />
                    </div>
                    <div>
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" required />
                    </div>
                    <div>
                        <label htmlFor="logradouro">Logradouro:</label>
                        <input type="text" id="logradouro" name="logradouro" required />
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="dietaryRestriction" />
                            Possuo restrição alimentar
                        </label>
                    </div>
                    <div>
                        <label htmlFor="qual">Qual?</label>
                        <select id="qual" name="qual" required defaultValue="">
                            <option value="" disabled>
                                Selecione uma opção
                            </option>
                            <option value="opcao1">Opção 1</option>
                            <option value="opcao2">Opção 2</option>
                            <option value="opcao3">Opção 3</option>
                        </select>
                    </div>
                </form>
                <form>
                    <div>
                        <label htmlFor="schoolName">Nome da sua escola:</label>
                        <input type="text" id="schoolName" name="schoolName" required />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required />
                    </div>
                    <div>
                        <label htmlFor="rg">RG:</label>
                        <input type="text" id="rg" name="rg" required />
                    </div>
                    <div>
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" required />
                    </div>
                    <div>
                        <label htmlFor="logradouro">Logradouro:</label>
                        <input type="text" id="logradouro" name="logradouro" required />
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="dietaryRestriction" />
                            Possuo restrição alimentar
                        </label>
                    </div>
                    <div>
                        <label htmlFor="qual">Qual?</label>
                        <select id="qual" name="qual" required defaultValue="">
                            <option value="" disabled>
                                Selecione uma opção
                            </option>
                            <option value="opcao1">Opção 1</option>
                            <option value="opcao2">Opção 2</option>
                            <option value="opcao3">Opção 3</option>
                        </select>
                    </div>
                </form>
                <form>
                    <div>
                        <label htmlFor="schoolName">Nome da sua escola:</label>
                        <input type="text" id="schoolName" name="schoolName" required />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required />
                    </div>
                    <div>
                        <label htmlFor="rg">RG:</label>
                        <input type="text" id="rg" name="rg" required />
                    </div>
                    <div>
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" required />
                    </div>
                    <div>
                        <label htmlFor="logradouro">Logradouro:</label>
                        <input type="text" id="logradouro" name="logradouro" required />
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="dietaryRestriction" />
                            Possuo restrição alimentar
                        </label>
                    </div>
                    <div>
                        <label htmlFor="qual">Qual?</label>
                        <select id="qual" name="qual" required defaultValue="">
                            <option value="" disabled>
                                Selecione uma opção
                            </option>
                            <option value="opcao1">Opção 1</option>
                            <option value="opcao2">Opção 2</option>
                            <option value="opcao3">Opção 3</option>
                        </select>
                    </div>
                </form>
                <form>
                    <div>
                        <label htmlFor="schoolName">Nome da sua escola:</label>
                        <input type="text" id="schoolName" name="schoolName" required />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required />
                    </div>
                    <div>
                        <label htmlFor="rg">RG:</label>
                        <input type="text" id="rg" name="rg" required />
                    </div>
                    <div>
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" required />
                    </div>
                    <div>
                        <label htmlFor="logradouro">Logradouro:</label>
                        <input type="text" id="logradouro" name="logradouro" required />
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="dietaryRestriction" />
                            Possuo restrição alimentar
                        </label>
                    </div>
                    <div>
                        <label htmlFor="qual">Qual?</label>
                        <select id="qual" name="qual" required defaultValue="">
                            <option value="" disabled>
                                Selecione uma opção
                            </option>
                            <option value="opcao1">Opção 1</option>
                            <option value="opcao2">Opção 2</option>
                            <option value="opcao3">Opção 3</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" className={styles.registerButton}>Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Registration;
