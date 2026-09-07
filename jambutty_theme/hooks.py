app_name = "jambutty_theme"
app_title = "Jambutty ERP"
app_publisher = "Jambutty"
app_description = "Jambutty ERP branding and white-label overrides"
app_email = "admin@example.com"
app_license = "mit"

# Apps
# ------------------

# required_apps = []

# Each item in the list will be shown as an app in the apps page
# add_to_apps_screen = [
# 	{
# 		"name": "jambutty_theme",
# 		"logo": "/assets/jambutty_theme/logo.png",
# 		"title": "Jambutty ERP",
# 		"route": "/jambutty_theme",
# 		"has_permission": "jambutty_theme.api.permission.has_app_permission"
# 	}
# ]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/jambutty_theme/css/jambutty_theme.css"
# app_include_js = "/assets/jambutty_theme/js/jambutty_theme.js"

# include js, css files in header of web template
# web_include_css = "/assets/jambutty_theme/css/jambutty_theme.css"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "jambutty_theme/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "jambutty_theme/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# automatically load and sync documents of this doctype from downstream apps
# importable_doctypes = [doctype_1]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "jambutty_theme.utils.jinja_methods",
# 	"filters": "jambutty_theme.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "jambutty_theme.install.before_install"
# after_install = "jambutty_theme.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "jambutty_theme.uninstall.before_uninstall"
# after_uninstall = "jambutty_theme.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "jambutty_theme.utils.before_app_install"
# after_app_install = "jambutty_theme.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "jambutty_theme.utils.before_app_uninstall"
# after_app_uninstall = "jambutty_theme.utils.after_app_uninstall"

# Build
# ------------------
# To hook into the build process

# after_build = "jambutty_theme.build.after_build"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "jambutty_theme.notifications.get_notification_config"

# Awesome Bar
# -----------
# Extra search results: list of dicts with label, description, route, index.
# route: ["List", "ToDo"], "/desk/docs/some/page", or "https://example.com"
# awesomebar_search = ["jambutty_theme.search.awesomebar_results"]

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"jambutty_theme.tasks.all"
# 	],
# 	"daily": [
# 		"jambutty_theme.tasks.daily"
# 	],
# 	"hourly": [
# 		"jambutty_theme.tasks.hourly"
# 	],
# 	"weekly": [
# 		"jambutty_theme.tasks.weekly"
# 	],
# 	"monthly": [
# 		"jambutty_theme.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "jambutty_theme.install.before_tests"

# Extend DocType Class
# ------------------------------
#
# Specify custom mixins to extend the standard doctype controller.
# extend_doctype_class = {
# 	"Task": "jambutty_theme.custom.task.CustomTaskMixin"
# }

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "jambutty_theme.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "jambutty_theme.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["jambutty_theme.utils.before_request"]
# after_request = ["jambutty_theme.utils.after_request"]

# Job Events
# ----------
# before_job = ["jambutty_theme.utils.before_job"]
# after_job = ["jambutty_theme.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"jambutty_theme.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }

# Translation
# ------------
# List of apps whose translatable strings should be excluded from this app's translations.
# ignore_translatable_strings_from = []


# Jambutty ERP white-label
app_include_css = "/assets/jambutty_theme/css/jambutty_theme.css"
app_include_js = "/assets/jambutty_theme/js/jambutty_theme.js"
web_include_css = "/assets/jambutty_theme/css/jambutty_theme.css"
web_include_js = "/assets/jambutty_theme/js/jambutty_web.js"
update_website_context = "jambutty_theme.branding.update_website_context"
boot_session = "jambutty_theme.branding.boot_session"
