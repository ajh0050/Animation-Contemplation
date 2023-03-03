import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Characters.css";

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            search: "",
        }
    }
    componentDidMount() {
        fetch("https://animation-contemplation-api.fly.dev/characters")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ characters: data })
            });
    }
    handleChange = (event) => {
        this.setState({ search: event.target.value })
    }

    isLoading = () => {
        if (this.state.characters.length === 0) {
            return <h1>Loading...</h1>;
        }
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
                return <Link to={`/character/${character}`}>
                    <button className="character-button">{character}</button>
                </Link>
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
                {this.isLoading()}
                <form>
                        <input type="text" name="search" value={this.state.search} onChange={this.handleChange} placeholder="Search for a character" />
                </form>
                {this.state.search === "" ? this.searchEmpty() : this.searchNotEmpty()}
            </div>
        );
    }
}

export default Characters;