import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, Select, Textarea, Box, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const initialData = {
  projects: [
    {
      crew_workflow: [{ crew_name: "Dev Crew", output_name: "code", send_global_data_parameters: true }],
      data_parameters: { requirements: "Create an API that can return 'Hello World'", more_data: "lala" },
    },
  ],
  crews: [
    {
      crew_id: "Copy Crew",
      agents: ["Lead Market Analyst", "Chief Marketing Strategist", "Creative Content Creator"],
      tasks: [
        { crew_t_id: "website_analysis", task_id: "product_analysis", agent_id: "Lead Market Analyst" },
        { crew_t_id: "market_analysis", task_id: "competitor_analysis", agent_id: "Lead Market Analyst" },
        { crew_t_id: "campaign_development", task_id: "campaign_development", agent_id: "Chief Marketing Strategist" },
        { crew_t_id: "write_copy", task_id: "instagram_ad_copy", agent_id: "Creative Content Creator" },
      ],
    },
  ],
  agents: [
    {
      agent_id: "Lead Market Analyst",
      agent_type: "Research",
      core_prompt: "Conduct amazing analysis of the products and competitors, providing in-depth insights to guide marketing strategies.",
      goal: "As the Lead Market Analyst at a premier digital marketing firm, you specialize in dissecting online business landscapes.",
      tools: ["SearchTools.search_internet"],
      llm_provider: "ollama",
      llm_model: "llava:latest",
    },
  ],
  tasks: [
    {
      task_id: "product_analysis",
      description: "Analyze the given product website: {product_website}. Extra details provided by the customer: {product_details}. Focus on identifying unique features, benefits, and the overall narrative presented. Your final report should clearly articulate the product's key selling points, its market appeal, and suggestions for enhancement or positioning. Emphasize the aspects that make the product stand out. Keep in mind, attention to detail is crucial for a comprehensive analysis. It's currently 2024.",
    },
  ],
  llm_providers: [
    {
      provider_name: "openai",
      models: ["gpt4", "gpt4o"],
    },
    {
      provider_name: "ollama",
      models: ["llava:latest", "llama3"],
    },
    {
      provider_name: "azure",
      models: ["gpt3.5", "gpt4"],
    },
  ],
};

const Index = () => {
  const [data, setData] = useState(initialData);
  const [newProject, setNewProject] = useState({ crew_workflow: [], data_parameters: {} });
  const [newCrew, setNewCrew] = useState({ crew_id: "", agents: [], tasks: [] });
  const [newAgent, setNewAgent] = useState({ agent_id: "", agent_type: "", core_prompt: "", goal: "", tools: [], llm_provider: "", llm_model: "" });
  const [newTask, setNewTask] = useState({ task_id: "", description: "" });
  const [newLLMProvider, setNewLLMProvider] = useState({ provider_name: "", models: [] });

  const handleAddProject = () => {
    setData((prevData) => ({ ...prevData, projects: [...prevData.projects, newProject] }));
    setNewProject({ crew_workflow: [], data_parameters: {} });
  };

  const handleAddCrew = () => {
    setData((prevData) => ({ ...prevData, crews: [...prevData.crews, newCrew] }));
    setNewCrew({ crew_id: "", agents: [], tasks: [] });
  };

  const handleAddAgent = () => {
    setData((prevData) => ({ ...prevData, agents: [...prevData.agents, newAgent] }));
    setNewAgent({ agent_id: "", agent_type: "", core_prompt: "", goal: "", tools: [], llm_provider: "", llm_model: "" });
  };

  const handleAddTask = () => {
    setData((prevData) => ({ ...prevData, tasks: [...prevData.tasks, newTask] }));
    setNewTask({ task_id: "", description: "" });
  };

  const handleAddLLMProvider = () => {
    setData((prevData) => ({ ...prevData, llm_providers: [...prevData.llm_providers, newLLMProvider] }));
    setNewLLMProvider({ provider_name: "", models: [] });
  };

  return (
    <Container centerContent maxW="container.xl" py={8}>
      <VStack spacing={8} width="100%">
        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Projects
          </Text>
          {data.projects.map((project, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
              <Text fontWeight="bold">Project {index + 1}</Text>
              <Text>Crew Workflow: {JSON.stringify(project.crew_workflow)}</Text>
              <Text>Data Parameters: {JSON.stringify(project.data_parameters)}</Text>
            </Box>
          ))}
          <Button onClick={handleAddProject} leftIcon={<FaPlus />}>
            Add Project
          </Button>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Crews
          </Text>
          {data.crews.map((crew, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
              <Text fontWeight="bold">Crew ID: {crew.crew_id}</Text>
              <Text>Agents: {crew.agents.join(", ")}</Text>
              <Text>Tasks: {JSON.stringify(crew.tasks)}</Text>
            </Box>
          ))}
          <Button onClick={handleAddCrew} leftIcon={<FaPlus />}>
            Add Crew
          </Button>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Agents
          </Text>
          {data.agents.map((agent, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
              <Text fontWeight="bold">Agent ID: {agent.agent_id}</Text>
              <Text>Type: {agent.agent_type}</Text>
              <Text>Core Prompt: {agent.core_prompt}</Text>
              <Text>Goal: {agent.goal}</Text>
              <Text>Tools: {agent.tools.join(", ")}</Text>
              <Text>LLM Provider: {agent.llm_provider}</Text>
              <Text>LLM Model: {agent.llm_model}</Text>
            </Box>
          ))}
          <Button onClick={handleAddAgent} leftIcon={<FaPlus />}>
            Add Agent
          </Button>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Tasks
          </Text>
          {data.tasks.map((task, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
              <Text fontWeight="bold">Task ID: {task.task_id}</Text>
              <Text>Description: {task.description}</Text>
            </Box>
          ))}
          <Button onClick={handleAddTask} leftIcon={<FaPlus />}>
            Add Task
          </Button>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            LLM Providers
          </Text>
          {data.llm_providers.map((provider, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
              <Text fontWeight="bold">Provider Name: {provider.provider_name}</Text>
              <Text>Models: {provider.models.join(", ")}</Text>
            </Box>
          ))}
          <Button onClick={handleAddLLMProvider} leftIcon={<FaPlus />}>
            Add LLM Provider
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
