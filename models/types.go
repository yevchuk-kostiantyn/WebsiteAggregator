package models

type Article struct {
	URL      string `json:"url"`
	Interest string `json:"interest"`
	Text     string `json:"text"`
}