variable "subscription_id" { type = string }
variable "sp_tenant_id" { type = string }
variable "sp_client_id" { type = string }
variable "sp_client_secret" { type = string; sensitive = true }
variable "resource_group" { type = string }
variable "location" { type = string; default = "westeurope" }
variable "container_app_name" { type = string }
variable "container_apps_env_name" { type = string }
variable "acr_name" { type = string }
variable "acr_login_server" { type = string }
