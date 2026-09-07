"""JBERP white-label server hooks (JB platform branding)."""

import frappe

BRAND = "JBERP"
FULL = "Jambutty ERP"
LOGO = "/assets/jambutty_theme/images/jambutty-logo.svg"
FAVICON = "/assets/jambutty_theme/images/favicon.svg"


def update_website_context(context):
    """Force brand defaults on website context."""
    try:
        context["brand_name"] = BRAND
        context["app_logo"] = LOGO
        context["favicon"] = FAVICON
    except Exception:
        pass
    return context


def boot_session(bootinfo):
    """Tag boot info with brand; desk JS uses it if needed."""
    try:
        bootinfo["jambutty_brand"] = BRAND
        sysdefaults = bootinfo.get("sysdefaults") or {}
        sysdefaults["app_name"] = BRAND
        bootinfo["sysdefaults"] = sysdefaults
    except Exception:
        pass
