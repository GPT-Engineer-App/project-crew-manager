# project-crew-manager

Create an application that allows to maintain and edit the following entities:

#1. Project:
{
    "crew_workflow": [
        { "crew_name": "Dev Crew", "output_name": "code", "send_global_data_parameters": true }
    ],
    "data_parameters": { "requirements": "Create an API that can return 'Hello World'", "more_data": "lala" }
}

#2. Crews, example:
{
    "available_crews": [
      {
        "crew_id": "Copy Crew",
        "agents": [ "Lead Market Analyst","Chief Marketing Strategist","Creative Content Creator"],
        "tasks": [ 
          { "crew_t_id": "website_analysis","task_id": "product_analysis", "agent_id": "Lead Market Analyst" },
          { "crew_t_id": "market_analysis","task_id": "competitor_analysis", "agent_id": "Lead Market Analyst" },
          { "crew_t_id": "campaign_development","task_id": "campaign_development", "agent_id": "Chief Marketing Strategist" },
          { "crew_t_id": "write_copy","task_id": "instagram_ad_copy", "agent_id": "Creative Content Creator" }
        ]
      },

#3 Agents.
{
  "available_agents": [
    {
      "agent_id": "Lead Market Analyst",
      "agent_type": "Research",
      "core_prompt": "Conduct amazing analysis of the products and competitors, providing in-depth insights to guide marketing strategies.",
      "goal": "As the Lead Market Analyst at a premier digital marketing firm, you specialize in dissecting online business landscapes.",
      "tools": [ "SearchTools.search_internet" ],
      "llm_provider": "ollama",
      "llm_model": "llava:latest"
    },

#4. Tasks.
{
    "tasks": [
        {
            "task_id": "product_analysis",
            "description": "Analyze the given product website: {product_website}. Extra details provided by the customer: {product_details}. Focus on identifying unique features, benefits, and the overall narrative presented. Your final report should clearly articulate the product's key selling points, its market appeal, and suggestions for enhancement or positioning. Emphasize the aspects that make the product stand out. Keep in mind, attention to detail is crucial for a comprehensive analysis. It's currently 2024."
        },
#5. llm providers
{
    "llm_providers": [
      {
        "provider_name": "openai",
        "models": [
          "gpt4",
          "gpt4o"
        ]
      },
      {
        "provider_name": "ollama",
        "models": [
          "llava:latest",
          "llama3"
        ]
      },
      {
        "provider_name": "azure",
        "models": [
          "gpt3.5",
          "gpt4"
        ]
      }
    ]
  }


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/project-crew-manager.git
cd project-crew-manager
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
