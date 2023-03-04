import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Characters.css";
import  { getCharacters } from "../../ApiCalls";
import Error from "../Error/Error"

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            search: "",
            error: null,
        }
    }
    componentDidMount() {
        getCharacters()
        .then((data) => {
                this.setState({ characters: data })
            })
        .catch((error) => {
            this.setState({ error: error })
        })
    }
    handleChange = (event) => {
        this.setState({ search: event.target.value })
    }

    searchNotEmpty = () => {
        if (this.state.search !== "") {
            let filteredCharacters = this.state.characters.filter((character) => {
                return character.toLowerCase().includes(this.state.search.toLowerCase())
            })
            if (filteredCharacters.length === 0) {
                return <h1>No characters found</h1>
            }
            let charactersButtons = filteredCharacters.map((character) => {
                return (
                <Link to={`/character/${character}`}>
                    <button className="character-button">{character}</button>
                </Link>
                )
            })
            return (
                <div className="characters-button-container">
                    {charactersButtons}
                </div>
            );
        }
    }
    searchEmpty = () => {
        let charactersButtons = this.state.characters.map((character) => {
            return (
                <Link to={`/character/${character}`}>
                    <button className="character-button">{character}</button>
                </Link>
            )
        });
        return (
            <div className="characters-button-container">
                {charactersButtons}
            </div>
        )
    }

    render() {
        return (
            <div className="characters-section-container">
                {this.state.error && <Error error={this.state.error}/>}
                {!this.state.error && <form className="search-form"><h3 className="search-title">Search any anime character to get quotes from them!</h3><input className="search-bar" type="text" name="search" value={this.state.search} onChange={this.handleChange} placeholder="Search for a character" /></form>}
                {(this.state.characters.length === 0 && !this.state.error) && <h1 className="loading-text">Loading...</h1>}
                {this.state.search === "" ? this.searchEmpty() : this.searchNotEmpty()}
            </div>
        );
    }
}

export default Characters;